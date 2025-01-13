import { Box } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom";
import HomePage  from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/ui/Navbar";
import { useColorModeValue } from "./components/ui/color-mode";
import { Toaster, toaster } from "@/components/ui/toaster"

function App() {

  return (
    <Box
      minH={"100vh"}
      bg={useColorModeValue("dark.100","gray.900")}
      fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
    >
      <Toaster />
      <Navbar />
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>

    </Box>
    
  );
}

export default App
