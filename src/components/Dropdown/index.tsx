import React from 'react'

interface Option {
    value: string;
    label: string;
  }
  
const Dropdown = () => {
    const [selectedOption, setSelectedOption] = React.useState<Option | null>(null);
  const [options, setOptions] = React.useState<Option[]>([]);

  // Simulasikan pengambilan data dari API atau sumber lainnya
  React.useState(() => {
    const fetchedOptions: Option[] = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ];
    setOptions(fetchedOptions);
  }, );

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
  };

  const renderOptions = () => {
    return options.map((option) => (
      <li
        key={option.value}
        className="cursor-pointer hover:bg-gray-200"
        onClick={() => handleOptionClick(option)}
      >
        {option.label}
      </li>
    ));
  };
  return (
    <div>
        <li className="relative group">
          <div className="cursor-pointer dropdown-toggle">
            {selectedOption ? selectedOption.label : 'Pilih Opsi'}
          </div>
          <ul className="absolute hidden mt-2 text-gray-800 bg-white rounded-md dropdown-menu">
            {renderOptions()}
          </ul>
        </li>
    </div>
  )
}

export default Dropdown