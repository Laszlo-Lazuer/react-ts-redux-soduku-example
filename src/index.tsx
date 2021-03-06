import React from 'react'
import ReactDOM from 'react-dom'
import { unregister } from './core'
import { GlobalStyles, theme } from './styles'
import { ThemeProvider } from 'styled-components'
import { Content, Title, Card, Grid } from './components'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Content data-cy="content">
      <Title data-cy="title">Sudoku</Title>
      <Card data-cy="card">
        <Grid />
      </Card>
    </Content>
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister()
