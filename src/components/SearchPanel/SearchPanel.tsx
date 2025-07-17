import "../SearchPanel/search-panel.scss";

interface SearchPanelProps {
  placeholder: string;
}

const SearchPanel = ({ placeholder }: SearchPanelProps) => {
  return (
    <section className="search">
      <div className="container">
        <div className="search__inner">
          <div className="search__input-box">
            <input
              id="search__input"
              className="search__input"
              type="search"
              placeholder={placeholder}
            />
            <button className="search__btn">Go!</button>
          </div>

          <div className="search__filters">
            <button className="search__filter active">All</button>
            <button className="search__filter">Italian</button>
            <button className="search__filter">Asian</button>
            <button className="search__filter">Healthy</button>
            <button className="search__filter">Dessert</button>
            <button className="search__filter">Mexican</button>
            <button className="search__filter">French</button>
            <button className="search__filter">Greek</button>
            <button className="search__filter">Random!</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchPanel;
