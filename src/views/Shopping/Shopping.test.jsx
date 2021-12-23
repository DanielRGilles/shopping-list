import { render, screen, fireEvent, within } from '@testing-library/react';
import Shopping from './Shopping.jsx';



beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<Shopping  />)
  })

  it('can add an item', async () => {
    const input = await screen.findByPlaceholderText(/new item/i)
    const addButton = await screen.findByText(/add Item/i)
    fireEvent.change(input, {target: {value: 'asdf'}})
    fireEvent.click(addButton)
    const editButtons = await screen.findAllByText('Edit')
    expect(editButtons.length).toEqual(4)
  })

it('can edit an item', async() => {
    const editButton = await screen.getAllByText('Edit')[0]
    fireEvent.click(editButton)
    const input = await screen.findByDisplayValue('Pringles')
    fireEvent.change(input, {target: {value: 'Example'}})
    const saveButton = await screen.findByText('Save')
    fireEvent.click(saveButton)
    const newItemText = await screen.findByText('Example')
    expect(newItemText).toBeInTheDocument();
})

it('can complete an item', async () => {
    const checkbox = await screen.getAllByRole('checkbox')[0]
    fireEvent.click(checkbox)
    const inputTag = await screen.getAllByTestId('input-tag')[0]
    const stText = await within(inputTag).findByText(/Pringles/i)
    expect(stText).toBeInTheDocument()
  })

it('can delete an item', async () => {
    const deleteButton = await screen.getAllByText(/delete/i)[0]
    fireEvent.click(deleteButton)
    const editButtons = await screen.findAllByText('Edit')
    expect(editButtons.length).toEqual(2)
})