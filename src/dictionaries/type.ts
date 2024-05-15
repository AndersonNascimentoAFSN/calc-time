interface InputField {
  label: string;
  placeholder: string;
}

interface OutputField {
  label: string;
}

interface Content {
  title: string;
  description: string;
  input: InputField;
  output: OutputField;
}

interface Tab {
  title: string;
  content: Content;
}

interface TimeConversions {
  title: string;
  tab_time_decimal: Tab;
  tab_decimal_time: Tab;
}

export interface IDictionary {
  time: TimeConversions;
}