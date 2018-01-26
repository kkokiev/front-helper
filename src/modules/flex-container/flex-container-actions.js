export const CHANGE_FLEX_CONTAINER_STYLES = 'CHANGE_FLEX_CONTAINER_STYLES';

export const changeFlexContainerStyles = (subtitle, value) => ({
  type: CHANGE_FLEX_CONTAINER_STYLES,
  payload: { subtitle, value }
});
