import { useEffect, useRef } from "react";
import { useLogin } from "@pankod/refine-core";
import { Container, Box, Typography } from "@pankod/refine-mui"; // Added Typography

import { yariga } from "../assets";

import sikkimRentalsLogo from "assets/apartments.png";

import { CredentialResponse } from "../interfaces/google";

export const Login: React.FC = () => {
    const { mutate: login } = useLogin<CredentialResponse>();

    const GoogleButton = (): JSX.Element => {
        const divRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            if (
                typeof window === "undefined" ||
                !window.google ||
                !divRef.current
            ) {
                return;
            }

            try {
                window.google.accounts.id.initialize({
                    ux_mode: "popup",
                    client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                    callback: async (res: CredentialResponse) => {
                        if (res.credential) {
                            login(res);
                        }
                    },
                });
                window.google.accounts.id.renderButton(divRef.current, {
                    theme: "filled_blue",
                    size: "medium",
                    type: "standard",
                });
            } catch (error) {
                console.log(error);
            }
        }, []);

        return <div ref={divRef} />;
    };

    return (
        <Box component="div" sx={{ backgroundColor: "#FCFCFC" }}>
            <Container
                component="main"
                maxWidth="xs"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100vh",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    {/* Logo and Text Container */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center", // Align items vertically
                            gap: 2, // Add spacing between logo and text
                        }}
                    >
                        {/* Logo */}
                        <img
                            src={sikkimRentalsLogo}
                            alt="Sikkim Rentals"
                            style={{
                                width: "80px", // Adjust logo size
                                height: "auto", // Maintain aspect ratio
                            }}
                        />
                        {/* Text */}
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: "bold",
                                color: "#333", // Customize text color
                            }}
                        >
                            Sikkim Rentals
                        </Typography>
                    </Box>

                    {/* Google Button */}
                    <Box mt={4}>
                        <GoogleButton />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};