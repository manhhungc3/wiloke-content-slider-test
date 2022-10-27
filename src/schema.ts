import { Schema } from "elementor-php-core";

export const schema: Schema = [
  {
    type: 'section',
    name: 'general',
    label: 'General',
    default: [],
    fields: [
      {
        type: 'select',
        default: 'variant1',
        name: 'variant',
        label: 'General Variant',
        options: {
          variant1: 'Variant 1',
          variant2: 'Variant 2',
          variant3: 'Variant 3',
          variant4: 'Variant 4',
        },
      },
      {
        type: 'text', name: 'mainTitle', label: 'Main Title', default: 'Wiloke Slide', condition:  {general_variant: ['variant3', 'variant4'] }
      },
      {
        type: 'text', name: 'mainText', label: 'Main Text', default: 'Lorem ipsum dolor sit amet.', condition:  {general_variant:[ 'variant4'] }
      },
      {
        type: 'array', default: [], name: 'content', label: 'Content', fields: [
          { type: 'media', name: 'featuredImage', label: 'Image',default: {
            url: '/wp-content/plugins/{{ name }}/src/Assets/Image/placeholder.jpeg'
          }},
          { type: 'icons', name: 'icon', label: 'Icons (For Variant 3 Only)', default: { value: 'far fa-user', library: 'fa-regular'} },
          { type: 'text', default: 'Activewear', name: 'title', label: 'Title' },
          { type: 'text', default: 'Lorem ipsum dolor sit amet consectetur.', name: 'text', label: 'Text' },
          { type: 'text', default: '', name: 'link', label: 'Link (For Variant 1 Only)' },
          { type: 'text', default: 'Read More', name: 'buttonText ', label: 'Button Text (For Variant 1 Only)' },
          { type: 'select', name: 'target', label: 'Target (For Variant 1 Only)', default: 'self' , options: {
            blank: 'New tab',
            self: 'This tab',
          }},
        ]
      },
    ]
  },

  {
    type: 'section_style',
    name: 'colors',
    label: 'Colors',
    default: [],
    fields: [
      { type: 'color', name: 'primary', label: 'Primary', default: '' },
      { type: 'color', name: 'secondary', label: 'Secondary', default: '' },
      { type: 'color', name: 'light', label: 'Light', default: '' },
      { type: 'color', name: 'gray2', label: 'Gray 2', default: '' },
      { type: 'color', name: 'gray7', label: 'Gray 7', default: '' },
      { type: 'color', name: 'gray9', label: 'Gray 9', default: '' },
    ]
  },

  {
    type: 'section_style',
    name: 'typography',
    label: 'Typography',
    default: [],
    fields: [
      {
        type: 'typography',
        label: 'Main Title',
        name: 'mainTitleTypo',
        default: '',
        selector: '{{WRAPPER}} .mainTitleTypo'
      },
      {
        type: 'typography',
        label: 'Main Text',
        name: 'mainTextTypo',
        default: '',
        selector: '{{WRAPPER}} .mainTextTypo'
      },

      {
        type: 'typography',
        label: 'Name',
        name: 'titleTypo',
        default: '',
        selector: '{{WRAPPER}} .titleTypo'
      },
      {
        type: 'typography',
        label: 'Text',
        name: 'textTypo',
        default: '',
        selector: '{{WRAPPER}} .textTypo'
      },
    ]
  },

  {
    type: 'section_style',
    name: 'border',
    label: 'Border',
    default: [],
    fields: [
      { type: 'switcher', default: false, name: 'enableBorder', label: 'Enable Border' },
      { type: 'number', default: 0, min: 0, max: Infinity, name: 'borderItemWidth', label: 'Border Item Width', condition: {border_enableBorder: true} },
      { type: 'select', default: 'solid', name: 'borderItemStyle', label: 'Border Item Style', options: {solid: 'solid', dotted: 'dotted', dashed: 'dashed', double: 'double', groove: 'groove'},  condition: {border_enableBorder: true} },
      { type: 'color', default: '', name: 'borderItemColor', label: 'border Item Color', condition: {border_enableBorder: true} },
      { type: 'number', default: 0, min: 0, max: Infinity, name: 'borderItemRadius', label: 'Border Item Radius', condition: {border_enableBorder: true}  },
    ]
  },

  {
    type: 'section_style',
    name: 'customCSS',
    label: 'Custom CSS',
    default: [],
    fields: [
      { type: 'code', name: 'code', label: 'Code', language: 'css',rows: 4 , default: '', },
    ],
  }
];
