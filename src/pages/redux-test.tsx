import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "gatsby"

import styled from "styled-components"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { selectIsDarkMode, toggle } from "../state/features/darkModeSlice"

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default function ReduxTestPage() {
  const dispatch = useDispatch()
  const isDarkMode = useSelector(selectIsDarkMode)
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </Container>
      <button
        type="button"
        style={isDarkMode ? { background: "black", color: "whte" } : {}}
        onClick={() => dispatch(toggle())}
      >
        DarkMode {isDarkMode ? "on" : "off"}
      </button>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      <br />
      <Link to="/using-typescript/">Go to Using TypeScript</Link>
    </Layout>
  )
}
