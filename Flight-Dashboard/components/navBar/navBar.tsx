import { ConnectButton } from "@mysten/dapp-kit";
import { Box, Flex, Heading } from "@radix-ui/themes";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export function NavBar() {
  return (
    <>
      <Flex
        position="sticky"
        px="4"
        py="2"
        justify="between"
        style={{
          minHeight: "55px",
          borderBottom: "1px solid var(--gray-a2)",
          alignItems: "center", // Ensures logo and button are aligned
          width: "100%", // Ensure the navbar spans the full width
          backgroundColor: "#210433", // Set background color
        }}
      >
        <div style={{ position: "fixed", right: "0" }}>
          <Button
            variant="contained"
            color="success"
            startIcon={<DownloadIcon />}
            // onClick={}
          >
            {/* <img src="" alt="Logo" style={{ height: "55px" }} /> */}
            Export data
          </Button>
          <Button
            style={{ margin: "6px" }}
            startIcon={<CloudUploadIcon />}
            variant="contained"
            color="success"
            // onClick={}
          >
            Test on cloud
          </Button>
        </div>
      </Flex>
    </>
  );
}
