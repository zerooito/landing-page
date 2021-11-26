import { screen, render } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('shoulder render the heading', () => {
    const { container } = render(<Main />)
    expect(
      screen.getByRole('heading', { name: /boilerplatezada./i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
