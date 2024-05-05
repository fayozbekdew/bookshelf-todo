import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import CssBaseline from "@mui/joy/CssBaseline";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { styled } from "@mui/material";
import { useForm } from "react-hook-form";

const AddBookDiv = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
}));
const submitBtn = styled("button")(() => ({
  padding: "5px 20px",
}));
function ModeToggle() {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <Button variant="soft">Change mode</Button>;
  }

  return (
    <Button
      variant="soft"
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    ></Button>
  );
}

export default function AddBook() {
  const { register, handleSubmit } = useForm();
  function AddNewBook(data) {
    console.log(data);
  }
  return (
    <main >
      <Sheet
        sx={{
          width: 500,
          mx: "auto", // margin left & right
          my: 4, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
          backdropFilter: 'blur(2px)'
        }}
        variant="outlined"
      >
        <Typography level="h2" style={{ textAlign: "center" }} component="h1">
          Add Book
        </Typography>
        <form onSubmit={handleSubmit(AddNewBook)}>
          <AddBookDiv>
            <div>
              <label style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ margin: "0px 0px 5px 0px" }}>Book name:</p>
                <input
                  style={{ outline: "none", padding: "4px 5px" }}
                  type="text"
                  {...register("bookName")}
                  placeholder="Write Book Name"
                />
              </label>
              <label>
                <p style={{ margin: "0px 0px 5px 0px" }}>Autor of book:</p>
                <input
                  style={{ outline: "none", padding: "4px 5px" }}
                  type="text"
                  {...register("autorName")}
                  placeholder="Write autor of book"
                />
              </label>
              <label>
                <p style={{ margin: "0px 0px 5px 0px" }}>Published year:</p>
                <input
                  style={{ outline: "none", padding: "4px 5px" }}
                  type="number"
                  {...register("published")}
                  placeholder="Published year"
                />
              </label>
            </div>
            <div>
              <label>
                <p style={{ margin: "0px 0px 5px 0px" }}>ISBN:</p>
                <input
                  style={{ outline: "none", padding: "4px 5px" }}
                  type="number"
                  {...register("isbn")}
                  placeholder="International Standard Book Number"
                />
              </label>
              <label>
                <p style={{ margin: "0px 0px 5px 0px" }}>Pages of book:</p>
                <input
                  style={{ outline: "none", padding: "4px 5px" }}
                  type="number"
                  {...register("pages")}
                  placeholder="Write pages of book"
                />
              </label>
              <label>
                <p style={{ margin: "0px 0px 5px 0px" }}>Cover:</p>
                <input
                  style={{ outline: "none", padding: "4px 5px" }}
                  type="url"
                  {...register("cover")}
                  placeholder="Cover"
                />
              </label>
            </div>
          </AddBookDiv>
          <button
            style={{
              backgroundColor: "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "0px 15px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "20px",
            }}
          >
            <h3>Add Book to shelf</h3>
          </button>
        </form>
      </Sheet>
    </main>
  );
}
