import React from 'react';

import Callout from './Callout';

export default {
  title: 'Content/Components/Callout',
  component: Callout,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['error', 'success', 'information']
      },
    },
  },
};

const Template = ({ type, ...args }) => {
  return <Callout {...args} type={type} />;
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'error',
  title: 'Callout title',
  text:
    'Tellus sit pellentesque sit sed sed faucibus sit quam. Massa lorem vestibulum, non viverra interdum aliquam amet.',
};
