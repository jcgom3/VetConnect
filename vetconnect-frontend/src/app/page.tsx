"use client";

import { Container, Typography, Button } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to VetConnect
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Container>
  );
}
