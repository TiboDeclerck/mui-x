import * as React from 'react';
import { SlotComponentProps } from '@mui/base/utils';
import { UseTreeItem2Status } from '../useTreeItem2';

export interface TreeItem2IconSlots {
  /**
   * The icon used to collapse the node.
   */
  collapseIcon?: React.ElementType;
  /**
   * The icon used to expand the node.
   */
  expandIcon?: React.ElementType;
  /**
   * The icon displayed next to an end node.
   */
  endIcon?: React.ElementType;
  /**
   * The icon to display next to the tree node's label.
   */
  icon?: React.ElementType;
}

export interface TreeItem2IconSlotProps {
  collapseIcon?: SlotComponentProps<'svg', {}, {}>;
  expandIcon?: SlotComponentProps<'svg', {}, {}>;
  endIcon?: SlotComponentProps<'svg', {}, {}>;
  icon?: SlotComponentProps<'svg', {}, {}>;
}

export interface TreeItem2IconProps {
  status: UseTreeItem2Status;
  /**
   * Overridable component slots.
   * @default {}
   */
  slots?: TreeItem2IconSlots;
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps?: TreeItem2IconSlotProps;
}
