const toggleNote = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const clickedElement = event.currentTarget;

  const currentHeight =
    clickedElement.style.maxHeight === '50px' ? 'initial' : '50px';

  return (clickedElement.style.maxHeight = currentHeight);
};

export default toggleNote;
