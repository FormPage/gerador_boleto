import React, { useState, useMemo, useEffect } from "react";
import { Grid, TextField } from "@material-ui/core";
import Button from "../../componentes/button/button";
import ReceiptContent from "./receiptContent";
import ReactToPdf from "react-to-pdf";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const ref = React.createRef();

const Receipt = () => {
  const [optionReceipt, setOptionReceit] = useState(1);

  const exportPdf = () => {
    html2canvas(document.querySelector("#teste"), { scale: 0.79 }).then(
      canvas => {
        const imgData = canvas.toDataURL("image/png");
        const imgData2 = canvas.toDataURL("image/png");
        const imgData3 = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        pdf.addImage(imgData, "PNG", 0, 0);
        pdf.addImage(imgData2, "PNG", 0, 100);
        pdf.addImage(imgData3, "PNG", 0, 200);
        pdf.save("recibo.pdf");
      }
    );
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        spacing={1}
        style={{
          marginTop: "200px",
        }}
      >
        <Grid item xs={4} md={4} lg={4}>
          <Button
            variant="primary"
            style={{ height: "48px" }}
            onClick={() => setOptionReceit(1)}
          >
            Recibos Identicos
          </Button>
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <Button
            variant="primary"
            style={{ height: "48px" }}
            onClick={() => setOptionReceit(3)}
          >
            Recibos Diferentes
          </Button>
        </Grid>
        {optionReceipt === 1 && (
          <Grid item xs={4} md={4} lg={4}>
            <Button
              variant="primary"
              style={{ height: "48px" }}
              onClick={exportPdf}
            >
              Gerar PDF
            </Button>
          </Grid>
        )}
        {optionReceipt === 3 && (
          <Grid item lg={4}>
            <ReactToPdf
              targetRef={ref}
              filename="recibo.pdf"
              x={0.5}
              y={0.5}
              scale={0.79}
            >
              {({ toPdf }) => (
                <Button
                  variant="primary"
                  style={{ height: "48px" }}
                  onClick={toPdf}
                >
                  Gerar PDF
                </Button>
              )}
            </ReactToPdf>
          </Grid>
        )}
      </Grid>
      {optionReceipt === 1 && <ReceiptContent />}
      {optionReceipt === 3 && (
        <div ref={ref}>
          <ReceiptContent />
          <ReceiptContent />
          <ReceiptContent />
        </div>
      )}
    </>
  );
};

export default Receipt;
