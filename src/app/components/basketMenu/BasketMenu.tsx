import React, { useRef } from 'react';

import IconButton from '../iconButton/IconButton';
import BasketMenuStyled from './BasketMenu.styled';
import Icon from '../icon/Icon';
import LinkButton from '../linkButton/LinkButton';
import BasketItem from '../basketItem/BasketItem';

// Hooks
import { _useOnClickOutside } from '../../utils/hooks/useOnClickOutside';

// Utils
import { isEmptyObj } from '../../utils/isEmptyObj';
import FocusLock from 'react-focus-lock';
import { isClient } from '../../utils/isClient';

export interface Props {
  className?: string;
  _toggleBasket: (val: boolean) => void;
  _toggleSearch: (val: boolean) => void;
  _removeFromBasket: (id: string, sku: string) => void;
  isBasketOpen: boolean;
  basket: any;
}

export interface BasketItemProps {
  title: string;
  id: string;
  quantity: number;
  sku: string;
  price: number;
}

const BasketMenu = ({
  className,
  isBasketOpen,
  _toggleBasket,
  _toggleSearch,
  _removeFromBasket,
  basket,
}: Props) => {
  const ref = useRef();
  _useOnClickOutside(ref, () => _toggleBasket(false));

  const _handleKeyDown = (evt: any) => {
    if (evt.keyCode === 27) {
      _toggleBasket(false);
    }
  };

  if (isClient()) {
    document.addEventListener('keydown', _handleKeyDown);
  }

  let TOTAL_PRICE = 0;
  const BASKET_ARRAY = Object.keys(basket).map(key => {
    const BASKET_ITEMS: BasketItemProps[] = [];
    if (!isEmptyObj(basket[key])) {
      const ITEMS = [basket[key]];
      ITEMS.forEach(el => {
        if (!el) return null;
        Object.keys(el).map(key => {
          BASKET_ITEMS.push(el[key]);
        });
      });
    }
    return BASKET_ITEMS;
  });

  const hasItemsInBasket = BASKET_ARRAY && BASKET_ARRAY.length >= 1;

  return (
    <BasketMenuStyled className={className} isBasketOpen={isBasketOpen}>
      <IconButton
        icon="wheelbarrow"
        height={32}
        width={32}
        text="Basket"
        className="basket-menu__btn"
        isToggled={isBasketOpen}
        _func={() => {
          _toggleSearch(false), _toggleBasket(!isBasketOpen);
        }}
      />
      {isBasketOpen && (
        <div className="basket-menu__content-wrapper" ref={ref}>
          <Icon className="basket-menu__icon" type="wheelbarrow" />
          <FocusLock>
            <IconButton
              icon="wheelbarrow"
              height={32}
              width={32}
              text="Basket"
              className="basket-menu__btn"
              isToggled={isBasketOpen}
              _func={() => {
                _toggleSearch(false), _toggleBasket(!isBasketOpen);
              }}
            />
            {!hasItemsInBasket && (
              <p className="basket-menu__text">Your basket is empty</p>
            )}
            {hasItemsInBasket && (
              <div className="basket-menu__items-wrapper">
                {BASKET_ARRAY &&
                  BASKET_ARRAY.map((item: any[]) => {
                    if (!item || item.length < 1) return null;
                    return item.map((product: BasketItemProps, idx: number) => {
                      TOTAL_PRICE += product.price * product.quantity;
                      return (
                        <BasketItem
                          key={idx}
                          {...product}
                          _removeFromBasket={_removeFromBasket}
                        />
                      );
                    });
                  })}
                <span>Total: £{TOTAL_PRICE.toFixed(2)}</span>
              </div>
            )}
            <LinkButton
              label={`${hasItemsInBasket ? 'Checkout' : 'Browse our products'}`}
              href={`${hasItemsInBasket ? '/checkout' : '/products/shop'}`}
              icon="arrow-right"
            />
          </FocusLock>
        </div>
      )}
    </BasketMenuStyled>
  );
};

export default BasketMenu;
