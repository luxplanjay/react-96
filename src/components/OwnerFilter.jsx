import { useSearchParams } from "react-router-dom";

export default function OwnerFilter() {
  const [params, setParams] = useSearchParams();
  const value = params.get("owner") ?? "";

  const changeFilter = (newFilter) => {
    params.set("owner", newFilter);
    setParams(params);
  };

  return (
    <div>
      Filter by owner
      <input
        type="text"
        value={value}
        onChange={(e) => changeFilter(e.target.value)}
      />
    </div>
  );
}
