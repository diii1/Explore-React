import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
 
import FormCoding from './FormCoding';
 
describe('FormPage', () => {
  test('renders Form component', () => {
    render(<FormCoding />);
    expect(screen.getByText(/Nama Lengkap:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
  });

  test('input text for name and email with false value', () => {
    render(<FormCoding />);
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: 'Jaj4t' },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: 'Dr Hahaha' },
    });
    expect(screen.getByText('Nama Lengkap Harus Berupa Huruf')).toBeInTheDocument();
    expect(screen.getByText('Email Tidak Sesuai')).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama/)).toHaveValue('Jaj4t');
    expect(screen.getByLabelText(/Email/)).toHaveValue('Dr Hahaha');
  });

  test('input text for ideal value', () => {
    render(<FormCoding />);
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: 'Jajat' },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: 'jajat@mail.com' },
    });
    expect(screen.getByLabelText(/Nama/)).toHaveValue('Jajat');
    expect(screen.getByLabelText(/Email/)).toHaveValue('jajat@mail.com');
  });

  test('submit button with error', () => {
    render(<FormCoding />);
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: 'Buku Hebat' },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: 'emailmail.com' },
    });
    fireEvent.submit(screen.getByText("Submit"))
    expect(window.alert).toBeCalledWith("Data Pendaftar Tidak Sesuai");
    expect(screen.getByLabelText(/Nama/)).toHaveValue('Buku Hebat');
    expect(screen.getByLabelText(/Email/)).toHaveValue('emailmail.com');
  });
});