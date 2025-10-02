import { NumberOfParticipants } from "../pageComponents/numberOfParticipants/numberOfParticipants";
import { Page } from "../components/page/page";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { spicinessSlice } from "../store/spiciness/slice";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(spicinessSlice.actions.reset());
  }, [dispatch]);

  return (
    <Page>
      <NumberOfParticipants />
    </Page>
  );
}
