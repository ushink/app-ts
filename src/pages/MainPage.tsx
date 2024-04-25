import { useDispatch } from "react-redux";
import { AirportCard } from "../components/AirportCard";
import { AirportFilter } from "../components/AirportFilter";
import { AirportSearch } from "../components/AirportSearch";
import { useEffect } from "react";
import { fetchAirports } from "../store/actions/airportAction";
import { useAppDispatch } from "../hooks/redux";

export function MainPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAirports());
  }, []);

  return (
    <div className="container mx-auto max-w-[760px] pt-5">
      <AirportSearch />
      <AirportFilter />
      <AirportCard />
    </div>
  );
}
