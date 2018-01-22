export const CHANGE_FLEX_CONTAINER_STYLES = 'CHANGE_FLEX_CONTAINER_STYLES';

export function changeFlexContainerStyles(subtitle, value) {
  return {
    type: CHANGE_FLEX_CONTAINER_STYLES,
    payload: { subtitle, value }
  };
}
