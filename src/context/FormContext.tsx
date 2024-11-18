import React, { createContext, useContext, useState, ReactNode } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  linkedIn: string;
  address: Address;
  summary: string;
  skills: Array<string>;
  hobbies: Array<string>;
  interest: Array<string>;
  certification: Array<string>;
  experience: Experience[];
  education: Education[];
}

interface Address {
  address: {
    streetNo: string;
    city: string
    state: string;
    country: string;

  };
}

interface Experience {
  position: string,
  company: {
    name: string,
    location: string,
    workModel: string,
  },
  project: [],
  majorDuties: string,
  achievements: string,
  fromDate: string,
  toDate: string,
  notes: string
}

interface Education {

  fromDate: string;
  toDate: string;
  institution: [
    {
      name: string;
      location: string;
      degree: string;
      result: string;
    }
  ];


}

const intialAddress = {
  address: {
    streetNo: '',
    city: '',
    state: '',
    country: '',
  },
}

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  linkedIn: '',
  address: intialAddress,
  summary: '',
  skills: [],
  hobbies: [],
  interest: [],
  certification: [],
  experience: [],
  education: []

}


interface FormContextType {
  formData: FormData;
  updateForm: (key: keyof FormData, value: string) => void;
  handleSubmit: (event: React.FormEvent) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

export const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();
}


interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const updateForm = (key: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <FormContext.Provider value={{ formData, updateForm, handleSubmit }}>
      {children}
    </FormContext.Provider>
  );
};