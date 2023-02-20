import { StyledSelect } from "./StyledSelect";

function Select({products, onChange}) {
    return ( 
        <div>
            <StyledSelect onChange={onChange} defaultValue="Sortuj wg marki">
            <option disabled hidden>
              Sortuj wg marki
            </option>
            {products.map(({brand, id}) => {
              return <option key={id} value={brand}>{brand}</option>;
            })}
            </StyledSelect>
        </div>

     );
}

export default Select;