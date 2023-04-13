import React, { useMemo } from 'react';

const SuccessCard = ({ status = true, children }) => {
  const colorClass = useMemo(() => {
    return status ? 'bg-green-500' : 'bg-purple-500';
  }, [status]);
  return (
    <div className="relative w-full overflow-hidden rounded-md m-h-96 bg-[#16181a]">
      <div className={'absolute top-0 w-full h-3 ' + colorClass}></div>
      <div className="p-10">{children}</div>
      {/* {status && (
        <svg width="166" height="150" className="absolute right-10 bottom-10">
          <g id="Shot" fill="none" fill-rule="evenodd">
            <g id="shot2" transform="translate(-135 -157)">
              <g id="status-card" transform="translate(48 120)">
                <g id="Top-Icon" transform="translate(99.9 47.7)">
                  <g id="Bubbles" fill="#5AE9BA">
                    <g id="bottom-bubbles" transform="translate(0 76)">
                      <ellipse
                        id="Oval-Copy-3"
                        cx="12.8571429"
                        cy="13.2605405"
                        rx="12.8571429"
                        ry="12.8432432"
                      />
                      <ellipse
                        id="Oval-Copy-4"
                        cx="25.0714286"
                        cy="34.4518919"
                        rx="8.35714286"
                        ry="8.34810811"
                      />
                      <ellipse
                        id="Oval-Copy-6"
                        cx="42.4285714"
                        cy="31.2410811"
                        rx="7.71428571"
                        ry="7.70594595"
                      />
                    </g>
                    <g id="top-bubbles" transform="translate(92)">
                      <ellipse
                        id="Oval"
                        cx="13.4285714"
                        cy="23.76"
                        rx="12.8571429"
                        ry="12.8432432"
                      />
                      <ellipse
                        id="Oval-Copy"
                        cx="37.8571429"
                        cy="25.0443243"
                        rx="5.14285714"
                        ry="5.1372973"
                      />
                      <ellipse
                        id="Oval-Copy-2"
                        cx="30.1428571"
                        cy="7.70594595"
                        rx="7.71428571"
                        ry="7.70594595"
                      />
                    </g>
                  </g>
                  <g id="Circle" transform="translate(18.9 11.7)">
                    <ellipse
                      id="blue-color"
                      cx="56.341267"
                      cy="54.0791109"
                      fill="#5AE9BA"
                      rx="51.2193336"
                      ry="51.5039151"
                    />
                    <ellipse
                      id="border"
                      cx="51.2283287"
                      cy="51.5039151"
                      stroke="#3C474D"
                      stroke-width="5"
                      rx="51.2193336"
                      ry="51.5039151"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      )} */}
    </div>
  );
};

export default SuccessCard;
