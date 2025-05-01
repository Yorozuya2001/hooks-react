import { memo } from "react";

const Small = memo(({ value }) => {
  console.log("Small component rendered");
  return <small>{value}</small>;
});

Small.displayName = "Small"; // ✅ Set display name for easier debugging

export default Small;
