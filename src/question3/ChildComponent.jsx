export default function ChildComponent({ handleColor }) {
  return (
    <div>
      <select onChange={(e) => handleColor(e.target.value)} defaultValue="">
        <option value="" disabled>
          Välj en färg
        </option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
}
