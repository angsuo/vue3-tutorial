import { onBeforeUnmount, onMounted, reactive } from "vue";

export default () => {
  // declare variables
  const point = reactive({ x: null, y: null });

  // declare methods
  const getPointer = ({ x, y }) => {
    point.x = x;
    point.y = y;
  };

  // lifecycle methods
  onMounted(() => {
    addEventListener("click", getPointer);
    // issue: cannot reset value of reactive value
  });
  onBeforeUnmount(() => {
    removeEventListener("click", getPointer);
  });

  // return "enhanced" value
  return point;
};
