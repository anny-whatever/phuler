import React from "react";

const SizeGuide = ({ category }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-medium mb-4">Size Guide</h3>

      {category === "necklaces" && (
        <div>
          <p className="mb-4">
            To find your perfect necklace length, measure the circumference of
            your neck and add 2-4 inches to the measurement for comfort.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Length
                  </th>
                  <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Style
                  </th>
                  <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Position
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-200">
                    14-16 inches
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">Choker</td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    Wraps around the neck
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-200">
                    18 inches
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    Princess
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    Sits at the collarbone
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-200">
                    20-22 inches
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    Matinee
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    Between the collarbone and bust
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">24+ inches</td>
                  <td className="px-4 py-2">Opera/Rope</td>
                  <td className="px-4 py-2">Over the bust or can be doubled</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {category === "bracelets" && (
        <div>
          <p className="mb-4">
            To find your perfect bracelet size, measure your wrist circumference
            and add 0.5-1 inch for comfort.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Wrist Size
                  </th>
                  <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Bracelet Size
                  </th>
                  <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fit
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-200">
                    5.5-6 inches
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    6.5-7 inches
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">Small</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-200">
                    6-6.5 inches
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    7-7.5 inches
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">Medium</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">6.5-7 inches</td>
                  <td className="px-4 py-2">7.5-8 inches</td>
                  <td className="px-4 py-2">Large</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {category === "rings" && (
        <div>
          <p className="mb-4">
            To find your perfect ring size, measure the circumference of your
            finger in millimeters and refer to the chart below.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    US Size
                  </th>
                  <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Diameter (mm)
                  </th>
                  <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Circumference (mm)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-200">5</td>
                  <td className="px-4 py-2 border-b border-gray-200">15.7</td>
                  <td className="px-4 py-2 border-b border-gray-200">49.3</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-200">6</td>
                  <td className="px-4 py-2 border-b border-gray-200">16.5</td>
                  <td className="px-4 py-2 border-b border-gray-200">51.9</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-200">7</td>
                  <td className="px-4 py-2 border-b border-gray-200">17.3</td>
                  <td className="px-4 py-2 border-b border-gray-200">54.4</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">8</td>
                  <td className="px-4 py-2">18.1</td>
                  <td className="px-4 py-2">57.0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default SizeGuide;
