import { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import { useTagsOverviewContext } from '../../../../../contexts/TagsOverviewContext/TagsOverviewContext';

const useRowsQuantity = () => {
  const { setTableRowsQuantity } = useTagsOverviewContext();
  const [inputValue, setInputValue] = useState<string>('20');

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, '').substring(0, 2);
    setInputValue(value);
  };

  const handleOnBlur = () => {
    if (inputValue === '') {
      setInputValue('1');
      setTableRowsQuantity(1);
    } else if (inputValue !== '') {
      setTableRowsQuantity(parseInt(inputValue, 10));
    }
  };

  const handleOnEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleOnBlur();
    }, 2000);
    return () => clearTimeout(timer);
  }, [inputValue]);

  return {
    handleQuantityChange,
    inputValue,
    handleOnBlur,
    handleOnEnterPress
  };
};

export default useRowsQuantity;
