export const ListPanel = ({ items, onClick, selectedItem, hasSubitems }) => {
  return (
    <div className="list-panel">
      {items.map((item, index) => (
        <div
          key={index}
          className={`list-item ${selectedItem === item ? 'selected' : ''}`}
          onClick={() => onClick(item)}
        >
          {/* Left bullet icon */}
          <span className="bullet-icon">•</span>
          <span>{item.name || item}</span>
          {/* Right arrow icon, only show if there are subitems */}
          {hasSubitems && item?.children?.length > 0 && (
            <span className="arrow-icon">▶</span>
          )}
        </div>
      ))}
    </div>
  );
};