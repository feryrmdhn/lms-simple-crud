import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import { pageRoutes } from "./routes/routes";
import { RouteProps } from "./types";
import { BsArrowLeft } from "react-icons/bs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header
          leftElement={
            <>
              <Flex>
                <Button variant='ghost' mr={1}><BsArrowLeft size='20px' /></Button>
                <Text color='#252A3C' pl={5} fontSize={18} fontWeight={600} lineHeight='40px' borderLeft='1px solid #BCC0D0'>
                  Event
                </Text>
              </Flex>
            </>
          }
        />
        <Box
          px="40px"
          pt="140px"
          h='full'
        >
          <Routes>
            {pageRoutes.map((route: RouteProps) => (
              <Route key={route.path} path={route.path} element={route.component} />
            ))}
          </Routes>
        </Box>
        {/* Footer */}
      </BrowserRouter>
    </>
  );
}

export default App;
