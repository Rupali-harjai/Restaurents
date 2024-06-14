export const withDiscount = (RestCard) => {
    return ({ discountName, discountValue, ...rest }) => {
      return (
        <div className="relative">
          <label className="absolute top-0 left-2 bg-[#cb7631] rounded-md font-bold p-2">
            {discountName}: {discountValue}
          </label>
          <RestCard {...rest} />
        </div>
      );
    };
  };
  