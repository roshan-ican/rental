import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";

import sikkimRentalsLogo from "assets/apartments.png"; // Ensure high-resolution logo

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {collapsed ? (
          <img
            src={sikkimRentalsLogo}
            alt="Sikkim Rentals"
            style={{ width: "32px", height: "32px", objectFit: "contain" }}
          />
        ) : (
          <img
            src={sikkimRentalsLogo}
            alt="Sikkim Rentals"
            style={{
              width: "140px",
              height: "40px", // Adjust height dynamically
              objectFit: "contain",
              borderRadius: "5px", // Optional: Rounded edges for better look
            }}
          />
        )}
      </Link>
    </Button>
  );
};