import React, { useState, useMemo, useEffect } from "react";
import { Grid, TextField } from "@material-ui/core";
import { Content, Separator, ContentBox, Text } from "./styles";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import Input from "../../componentes/input/input";
import NumberFormat from "react-number-format";

const INITIAL_DATA = {
  locatario: null,
  aluguel: null,
  multa: null,
  iptu: null,
  condominio: null,
  valor: null,
  recebedor: null,
  valor_extenso: null,
  imovel_tipo: null,
  endereco: null,
  proprietario: null,
  data: null,
};

const ReceiptContent = ({ reference }) => {
  const [data, setData] = useState(INITIAL_DATA);

  const currencyFormat = value => {
    if (!Number(value)) return "";

    const amount = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value / 100);

    return `${amount}`;
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      {console.log(data)}
      <Grid
        style={{
          width: "1000px",
          flexDirection: "row",
          justifyContent: "center",
          display: "flex",
          border: "1px solid #A6A6A6",
          marginTop: "10px",
          borderRadius: "4px",
        }}
        ref={reference}
        id="teste"
      >
        <Content>
          <Grid>
            <Grid container columns={2} spacing={1}>
              <Grid item xs={12} md={12} lg={12}>
                <Input
                  label="LOCATÁRIO"
                  onChange={e => {
                    setData(state => ({
                      ...state,
                      locatario: e.target.value,
                    }));
                  }}
                />
                <Divider style={{ marginTop: "10px" }} />
              </Grid>
              <Grid
                item
                xs={6}
                md={6}
                lg={6}
                style={{ display: "flex", alignItems: "center" }}
              >
                RECIBO DE ALUGUEL
              </Grid>
              <Grid item xs={6} md={6} lg={6}>
                <NumberFormat
                  // isInvalid={nullValue}
                  disabled
                  customInput={Input}
                  decimalScale={2}
                  thousandSeparator="."
                  decimalSeparator=","
                  fixedDecimalScale
                  placeholder="R$ 0,00"
                  allowLeadingZeros
                  label="VALOR"
                  value={
                    data.aluguel * 100 +
                    data.iptu * 100 +
                    data.multa * 100 +
                    data.condominio * 100
                  }
                  prefix="R$ "
                  format={currencyFormat}
                />
              </Grid>
            </Grid>
            <ContentBox>
              <Grid container columns={2} spacing={1}>
                <Grid item xs={6} md={6} lg={6}>
                  <NumberFormat
                    // isInvalid={nullValue}
                    customInput={Input}
                    decimalScale={2}
                    thousandSeparator="."
                    decimalSeparator=","
                    fixedDecimalScale
                    placeholder="R$ 0,00"
                    allowLeadingZeros
                    label="Aluguel"
                    onValueChange={values => {
                      const { formattedValue } = values;
                      const { value } = values;
                      setData(state => ({
                        ...state,
                        aluguel: Number(value) / 100,
                      }));
                    }}
                    prefix="R$ "
                    format={currencyFormat}
                  />
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                  <NumberFormat
                    // isInvalid={nullValue}
                    customInput={Input}
                    decimalScale={2}
                    thousandSeparator="."
                    decimalSeparator=","
                    fixedDecimalScale
                    placeholder="R$ 0,00"
                    allowLeadingZeros
                    label="Multa"
                    onValueChange={values => {
                      const { formattedValue } = values;
                      const { value } = values;
                      setData(state => ({
                        ...state,
                        multa: Number(value) / 100,
                      }));
                    }}
                    prefix="R$ "
                    format={currencyFormat}
                  />
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                  <NumberFormat
                    // isInvalid={nullValue}
                    customInput={Input}
                    decimalScale={2}
                    thousandSeparator="."
                    decimalSeparator=","
                    fixedDecimalScale
                    placeholder="R$ 0,00"
                    allowLeadingZeros
                    label="IPTU"
                    onValueChange={values => {
                      const { formattedValue } = values;
                      const { value } = values;
                      setData(state => ({
                        ...state,
                        iptu: Number(value) / 100,
                      }));
                    }}
                    prefix="R$ "
                    format={currencyFormat}
                  />
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                  <NumberFormat
                    // isInvalid={nullValue}
                    customInput={Input}
                    decimalScale={2}
                    thousandSeparator="."
                    decimalSeparator=","
                    fixedDecimalScale
                    placeholder="R$ 0,00"
                    allowLeadingZeros
                    label="Condomínio"
                    onValueChange={values => {
                      const { formattedValue } = values;
                      const { value } = values;
                      setData(state => ({
                        ...state,
                        condominio: Number(value) / 100,
                      }));
                    }}
                    prefix="R$ "
                    format={currencyFormat}
                  />
                </Grid>
              </Grid>
            </ContentBox>
            <ContentBox style={{ flexDirection: "column" }}>
              <Grid container columns={2} spacing={1}>
                <Grid item xs={12} md={12} lg={12}>
                  <Input
                    label="Recebi (emos) de"
                    onChange={e => {
                      setData(state => ({
                        ...state,
                        recebedor: e.target.value,
                      }));
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <Input
                    label="A importância de"
                    onChange={e => {
                      setData(state => ({
                        ...state,
                        valor_extenso: e.target.value,
                      }));
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <Input
                    label="Proveniente do aluguel do imóvel"
                    onChange={e => {
                      setData(state => ({
                        ...state,
                        imovel_tipo: e.target.value,
                      }));
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <Input
                    label="Sito à"
                    onChange={e => {
                      setData(state => ({
                        ...state,
                        endereco: e.target.value,
                      }));
                    }}
                  />
                </Grid>
              </Grid>
            </ContentBox>
            <ContentBox>
              <Grid container columns={2} spacing={1}>
                <Grid item xs={12} md={12} lg={12}>
                  <Input
                    label="Proprietário"
                    onChange={e => {
                      setData(state => ({
                        ...state,
                        proprietario: e.target.value,
                      }));
                    }}
                  />
                </Grid>
                <Grid item xs={9} md={9} lg={9}>
                  Assinatura:
                </Grid>
                <Grid item xs={3} md={3} lg={3}>
                  Data: __/__/____
                </Grid>
              </Grid>
            </ContentBox>
          </Grid>
        </Content>
        <Content style={{ width: "auto", maxWidth: "400px" }}>
          <Grid style={{ maxWidth: "400px" }}>
            <Grid container columns={2} spacing={1}>
              <Grid item xs={12} md={12} lg={12}>
                PROPRIETÁRIO {data.proprietario}
                <Divider style={{ marginTop: "17px" }} />
              </Grid>
              <Grid item xs={6} md={6} lg={6}>
                RECIBO
              </Grid>
              <Grid item xs={6} md={6} lg={6}>
                VALOR{" "}
                {currencyFormat(
                  data.aluguel * 100 +
                    data.iptu * 100 +
                    data.multa * 100 +
                    data.condominio * 100
                )}
              </Grid>
            </Grid>
            <ContentBox style={{ marginTop: "20px" }}>
              <Grid container columns={2} spacing={1}>
                <Grid item xs={6} md={6} lg={6}>
                  Aluguel R$ {currencyFormat(data.aluguel * 100)}
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                  Multa R$ {currencyFormat(data.multa * 100)}
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                  IPTU R$ {currencyFormat(data.iptu * 100)}
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                  Condomínio R$ {currencyFormat(data.condominio * 100)}
                </Grid>
              </Grid>
            </ContentBox>
            <ContentBox
              style={{ flexDirection: "column", wordWrap: "break-word" }}
            >
              <Grid container columns={2} spacing={5}>
                <Grid item xs={12} md={12} lg={12}>
                  Recebi (emos) de {data.recebedor}
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  Proveniente do aluguel do imóvel {data.imovel_tipo}
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  Sito à {data.endereco}
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  Correspondente ao período de 1 mês vencido em: __/__/____
                </Grid>
              </Grid>
            </ContentBox>
            <Grid container>
              <Grid
                item
                xs={12}
                md={12}
                lg={12}
                style={{
                  display: "flex",
                  marginTop: "10px",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
              >
                Data: __/__/____
              </Grid>
            </Grid>
          </Grid>
        </Content>
      </Grid>
    </>
  );
};

export default ReceiptContent;
