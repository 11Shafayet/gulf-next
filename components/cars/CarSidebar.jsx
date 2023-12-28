import { Accordion } from 'flowbite-react';
import React, { useEffect, useState } from 'react';

const CarSidebar = () => {
  const [odometerFilter, setOdometerFilter] = useState([0, 250000]);
  const [yearFilter, setYearFilter] = useState([1999, 2023]);
  const [checkboxFilters, setCheckboxFilters] = useState({});
  const [searchedText, setSearchedText] = useState('');

  const yearOptions = [
    '2023',
    '2022',
    '2021',
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
    '2015',
    '2014',
    '2013',
    '2012',
    '2011',
  ];
  const searchFilters = [
    {
      title: 'Vehicle Type',
      searchOptons: [
        {
          text: 'ATVs',
          count: 2,
          value: 'atvs',
        },
        {
          text: 'Automobiles',
          count: 2,
          value: 'automobiles',
        },
        {
          text: 'Boats',
          count: 2,
          value: 'boats',
        },
        {
          text: 'Dirt Bikes',
          count: 2,
          value: 'dirtbikes',
        },
        {
          text: 'Industrial Equipment',
          count: 2,
          value: 'industrialequipment',
        },
      ],
    },
    {
      title: 'Fuel Type',
      searchOptons: [
        {
          text: 'ATVs',
          count: 2,
          value: 'atvs',
        },
        {
          text: 'Automobiles',
          count: 2,
          value: 'automobiles',
        },
        {
          text: 'Boats',
          count: 2,
          value: 'boats',
        },
        {
          text: 'Dirt Bikes',
          count: 2,
          value: 'dirtbikes',
        },
        {
          text: 'Industrial Equipment',
          count: 2,
          value: 'industrialequipment',
        },
      ],
    },
    {
      title: 'Drive Train',
      searchOptons: [
        {
          text: 'ATVs',
          count: 2,
          value: 'atvs',
        },
        {
          text: 'Automobiles',
          count: 2,
          value: 'automobiles',
        },
        {
          text: 'Boats',
          count: 2,
          value: 'boats',
        },
        {
          text: 'Dirt Bikes',
          count: 2,
          value: 'dirtbikes',
        },
        {
          text: 'Industrial Equipment',
          count: 2,
          value: 'industrialequipment',
        },
      ],
    },
    {
      title: 'Cylinder',
      searchOptons: [
        {
          text: 'ATVs',
          count: 2,
          value: 'atvs',
        },
        {
          text: 'Automobiles',
          count: 2,
          value: 'automobiles',
        },
        {
          text: 'Boats',
          count: 2,
          value: 'boats',
        },
        {
          text: 'Dirt Bikes',
          count: 2,
          value: 'dirtbikes',
        },
        {
          text: 'Industrial Equipment',
          count: 2,
          value: 'industrialequipment',
        },
      ],
    },
  ];

  const handleCheckboxChange = (category, value) => {
    setCheckboxFilters((prevFilters) => ({
      ...prevFilters,
      [category]: {
        ...(prevFilters[category] || {}),
        [value]: !prevFilters[category]?.[value],
      },
    }));
  };

  useEffect(() => {
    console.log(checkboxFilters);
  }, [checkboxFilters]);

  const searchFilter = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white shadow-light rounded-md p-2 md:p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="font-bold text-xl">Search Filters</h2>
        <p className="text-primary font-bold cursor-pointer">Reset All</p>
      </div>
      <hr className="my-5" />
      <div>
        <Accordion className="!border-0">
          {/* odometer */}
          <Accordion.Panel>
            <Accordion.Title className="text-lg font-bold">
              Odometer
            </Accordion.Title>
            <Accordion.Content>
              <form action="">
                <div className="flex justify-between items-center gap-x-3 mt-2">
                  <input
                    type="number"
                    min={0}
                    className="input-with-shadow w-full"
                    placeholder="0"
                    value={odometerFilter[0]}
                    onChange={(e) =>
                      setOdometerFilter((prev) => [e.target.value, prev[0]])
                    }
                  />
                  <input
                    type="number"
                    min={0}
                    className="input-with-shadow w-full"
                    placeholder="250000"
                    value={odometerFilter[1]}
                    onChange={(e) =>
                      setOdometerFilter((prev) => [prev[1], e.target.value])
                    }
                  />
                </div>
                <button className="bg-primary text-white font-bold hover:bg-opacity-90 py-3 px-6 rounded-md duration-300 mt-4">
                  Apply
                </button>
              </form>
            </Accordion.Content>
          </Accordion.Panel>

          <hr className="my-5" />
          {/* year */}
          <Accordion.Panel>
            <Accordion.Title className="text-lg font-bold">
              Year
            </Accordion.Title>
            <Accordion.Content>
              <form action="">
                <div className="flex justify-between items-center gap-x-3 mt-2">
                  <select
                    required
                    name="year"
                    id="year"
                    value={yearFilter[0]}
                    onChange={(e) =>
                      setYearFilter((prev) => [e.target.value, prev[0]])
                    }
                    className="bg-white p-3 rounded-lg focus:border-0 focus:outline-none w-full max-h-[100px] overflow-y-auto input-with-shadow"
                  >
                    <option className="uppercase" defaultValue="1990" hidden>
                      {yearOptions[yearOptions.length - 1]}
                    </option>
                    {yearOptions.map((option, i) => (
                      <>
                        <option className="uppercase" value={option} key={i}>
                          {option}
                        </option>
                      </>
                    ))}
                  </select>
                  <select
                    required
                    name="year"
                    id="year"
                    value={yearFilter[1]}
                    onChange={(e) =>
                      setYearFilter((prev) => [prev[1], e.target.value])
                    }
                    className="bg-white p-3 rounded-lg focus:border-0 focus:outline-none w-full max-h-[100px] overflow-y-auto input-with-shadow"
                  >
                    <option className="uppercase" defaultValue="1990" hidden>
                      {yearOptions[0]}
                    </option>
                    {yearOptions.map((option, i) => (
                      <>
                        <option className="uppercase" value={option} key={i}>
                          {option}
                        </option>
                      </>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white font-bold hover:bg-opacity-90 py-3 px-6 rounded-md duration-300 mt-4"
                >
                  Apply
                </button>
              </form>
            </Accordion.Content>
          </Accordion.Panel>

          {searchFilters.map((item, i) => {
            return (
              <Accordion.Panel key={i}>
                <hr className="my-5" />
                <Accordion.Title className="text-lg font-bold">
                  {item.title}
                </Accordion.Title>
                <Accordion.Content>
                  <form action="">
                    <input
                      type="text"
                      min={0}
                      className="input-with-shadow w-full my-2"
                      placeholder="Search..."
                      value={searchedText}
                      onChange={(e) => setSearchedText(e.target.value)}
                    />
                    <div className="flex flex-col max-h-[200px] overflow-y-auto ml-2">
                      {item.searchOptons.map((option, j) => {
                        const { text, value, count } = option;
                        return (
                          <label key={j}>
                            <input
                              type="checkbox"
                              className="mr-2"
                              checked={checkboxFilters[item.title]?.[value]}
                              onChange={() =>
                                handleCheckboxChange(item.title, value)
                              }
                            />
                            {text}({count})
                          </label>
                        );
                      })}
                    </div>
                  </form>
                </Accordion.Content>
              </Accordion.Panel>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default CarSidebar;
