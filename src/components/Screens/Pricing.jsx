import ScreenLayout from "../../layouts/ScreenLayout";

const Pricing = () => {
  return (
    <>
      <ScreenLayout>
        <div className="flex flex-col items-center gap-2 p-10 text-white mx-auto">
          <p className="text-2xl text-teal-400 font-semibold underline">
            Pricing & Hours
          </p>
          <div id="hours" className="text-center mb-5">
            <p className="text-teal-400">
              <strong>Thursday & Friday:</strong> 3PM - 12AM (Midnight)
            </p>
            <p className="text-teal-400">
              <strong>Saturday:</strong> 1PM - 12AM (Midnight)
            </p>
            <p className="text-teal-400">
              <strong>Sunday:</strong> 1PM - 6PM (Midnight)
            </p>
          </div>
          <p className="text-xl font-semibold text-center mb-3">
            <strong>
              <em>ALL</em>
            </strong>{" "}
            must pay admission. Leave your meek indifference outside - we have
            no need of it.
          </p>
          <div className="flex gap-5 mb-3">
            <p className="text-2xl border border-teal-400 px-2 py-1 rounded text-teal-400 font-semibold">
              Daily Entry: $15
            </p>
            <p className="text-2xl border border-teal-400 px-2 py-1 rounded text-teal-400 font-semibold">
              Saturday: $20
            </p>
          </div>
          <p className="text-center text-xl font-semibold mb-3">
            Membership Plans & Bulk Admission Pricing available upon request
          </p>

          <div id="commandments">
            <p className="text-2xl text-teal-400 font-semibold underline text-center mb-5">
              Arcadia Commandments
            </p>
            <ul className="text-xl list-disc">
              <li>None under 18 admitted</li>
              <li>No cash accepted</li>
              <li>No alcohol served or permitted</li>
              <li>
                We have no place for the meek, nor the luxury of keeping clean
                hands
              </li>
            </ul>
          </div>
        </div>
      </ScreenLayout>
    </>
  );
};

export default Pricing;
