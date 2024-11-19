import React, { createContext, useContext, useState, ReactNode } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  role: string;
  linkedIn: string;
  address: Address;
  summary: string;
  skills: Array<string>;
  hobbies: Array<string>;
  interests: Array<string>;
  certifications: Array<string>;
  experiences: Experience[];
  educations: Education[];
}

interface Address {

  streetNo: string;
  city: string
  state: string;
  country: string;


}

interface Experience {
  position: string,
  companyName: string,
  location: string,
  workModel: string,
  majorDuties: string,
  achievements: string,
  fromDate: string,
  toDate: string,
  notes: string
}

interface Education {

  degree: string;
  fieldOfStudy: string;
  institution: string;
  startDate: string;
  endDate: string;
}

const intialAddress = {

  streetNo: '',
  city: '',
  state: '',
  country: '',

}

const initialEducation = [{

  degree: '',
  fieldOfStudy: '',
  institution: '',
  startDate: '',
  endDate: ''
}]


const initialFormData = {
  name: '',
  email: '',
  phone: '',
  role: '',
  linkedIn: '',
  address: intialAddress,
  summary: '',
  skills: [],
  hobbies: [],
  interests: [],
  certifications: [],
  experiences: [],
  educations: initialEducation

}



interface FormContextType {
  formData: FormData;
  updateForm: (key: keyof FormData, value: any) => void;
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