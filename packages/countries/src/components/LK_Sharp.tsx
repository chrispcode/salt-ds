import { useId } from "@salt-ds/core";
import { clsx } from "clsx";
// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type LK_SharpProps = CountrySymbolProps;

const LK_Sharp = forwardRef<SVGSVGElement, LK_SharpProps>(function LK_Sharp(
  props: LK_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="LK_Sharp"
      aria-label="Sri Lanka"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-LK-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-LK-a)`}>
        <path fill="#F1B434" d="M0 0h72v50H0z" />
        <path fill="#E26E00" d="M15 5h8v40h-8z" />
        <path fill="#A00009" d="M31 5h41v40H31z" />
        <path
          fill="#F1B434"
          fillRule="evenodd"
          d="m45.693 18.894 1.546 1.928c.077.17.115.51-.343.51-.573 0-3.437-1.077-3.437-1.077l-.86.907c-.037.17-.102.51-.056.51.045 0 .897-.076 1.317-.114l-.286.567.801-.227.516.397.114-.397.688.85c.114-.207.4-.612.63-.566.286.056.4.453.286.567a.668.668 0 0 0-.014.014l-.009.009-.03.031c-.108.116-.278.296-.863.682-.688.454-1.661 1.417-1.833 1.87-.03.08-.073.163-.123.258-.232.442-.611 1.167-.564 3.313-.611-.547-2.005-1.836-2.692-2.607v-.226a.73.73 0 0 0 .572-.737.646.646 0 0 0-.572-.68h-.516l.23-6.745.286-2.947c.412-1.587.439-1.984.4-1.984-.591.321-1.901 1.496-2.405 3.627-.32 1.043-.363 2.362-.344 2.89v5.159l.115.226c-.306-.075-.962-.113-1.146.34-.183.454-.076.68 0 .737.153.132.562.43.974.567-.134.264-.344 1.054-.115 2.097.02.151.138.555.459.963v.17l-.745-.056c-.132.056-.238.2.377.335l.024.005.344.073c-.153.278-.44.834-.368.834.073 0 .237.302.31.453.02.113.046.397 0 .624-.045.226-.286.283-.4.283-.172-.34-.402-.227-.516 0-.092.181.114.378.229.453l.573.34c0 .182-.13.34-.196.397l.024.17h.573c.057.227.217.68.4.68.184 0 .306-.453.344-.68.268-.056.756-.17.573-.17-.183 0-.305-.34-.344-.51.287-.075.825-.317.688-.68-.138-.363-.363-.151-.459 0l-.229-.113c-.076-.133-.229-.476-.229-.794 0-.317.153-.661.23-.793a.786.786 0 0 1-.23-.737c.715.291.627-.06.575-.266-.018-.075-.032-.13-.002-.13.092 0 .267-.265.344-.398l.172.227c0 1.19.171 1.87.343 1.87.138 0 .477-.264.63-.396.382.415 1.283 1.258 1.833 1.303.55.046 1.298-.737 1.604-1.133 0 .283 1.49.85 1.833.963.24.08.367 1.203.462 2.03.041.362.076.666.11.804.092.363-.572.831-.916 1.02h-1.49c-.19.095-.595.386-.686.794-.092.408.114.396.229.34l.458-.227c.367.499 1.03.208 1.317 0 .413.499 1.127.283 1.432.113.077.038.355.114.86.114.63 0 .859-.567.63-.85-.184-.227-.077-.737 0-.964 1.237 0 1.622-.944 1.66-1.417h-.859c-.641.09-.572-.567-.458-.907.23-.359.733-1.156.916-1.473.184-.318 3.208-1.38 4.697-1.87h1.49c-.092.86.038 1.19.114 1.246l1.604 2.38v2.438c0 .136-.306.245-.458.283-.325.038-1.031.114-1.26.114-.23 0-.44.302-.516.453-.32.59-.057.623.115.567l.515-.227c.504.499 1.05.208 1.26 0 .504.499 1.012.208 1.203 0 .272.314.58.273.81.242l.074-.01a.814.814 0 0 1 .09-.005c.183 0 .152-1.323.114-1.984.459-.272.802-1.247.917-1.7-.363.038-1.1-.034-1.146-.624-.046-.59.44-.85.688-.907.63.416 1.924 1.35 2.061 1.758.138.408-.057 1.53-.171 2.04-.478.17-1.49.521-1.719.567-.286.056-.515.736-.286.85.183.09.458-.19.573-.34.366.635.992.264 1.26 0 .458.498 1.03.208 1.26 0 .275.408 1.03.32 1.375.226-.115-.226-.401-.748-.63-1.02-.23-.272-.096-.793 0-1.02.095-.076.389-.329.801-.737.516-.51.287-.793-.171-.963-.367-.136-.65-1.077-.745-1.53-.183-.68.42-2.249.745-2.948.286-.623.756-2.21.343-3.57-.164-.541-.362-.95-.609-1.26.3-.124.647-.32.953-.602.427-.393.803-.978.803-1.76 0-.787-.38-1.36-.822-1.735a3.038 3.038 0 0 0-1.28-.632l-.066-.014h-6.092c-.475.009-1.176-.087-1.727-.37a2.422 2.422 0 0 1-.095-.052c.122-.374.422-.861.99-.848-.148-.431-.695-1.047-1.725-.192a1.657 1.657 0 0 1-.01-.223c.017-.666.368-1.05.875-1.296.377-.182.82-.271 1.207-.3l-.112.023c.355.25.968.951.579 1.748.515.04 1.403-.26 1.18-1.685.24.032.495.075.755.131l-.106-.003c.23.31.54 1.093-.054 1.743.437.15 1.307.071 1.57-1.291.381.171.729.382 1.015.64l.327.295c.472.427.882.798 1.237 1.069.423.323.897.611 1.437.611v-.006c.107.037.223.057.343.057.57 0 1.031-.456 1.031-1.02a1.035 1.035 0 0 0-1.911-.533 4.579 4.579 0 0 1-.13-.096c-.31-.237-.669-.561-1.138-.986l-.349-.314c-.8-.721-1.864-1.117-2.805-1.34a11.665 11.665 0 0 0-2.35-.296c-.596-.03-1.495.054-2.28.433-.822.398-1.55 1.147-1.58 2.386-.015.641.167 1.158.46 1.566-.794 1.04-.155 1.547.284 1.674-.03-.442.262-.733.57-.903.067.04.135.079.204.114.79.406 1.712.52 2.325.511h5.934c.185.049.45.162.667.346.227.192.381.441.381.788 0 .351-.16.625-.4.846a2.002 2.002 0 0 1-.732.42l-1.008.227a7.59 7.59 0 0 0-.724-.082c-1.283-.09-6.262.151-8.592.284-.596.045-.744-.926-.744-1.417.274.272.534.113.63 0-.413-.409-.325-.888-.23-1.077.23 0 .249-.227.23-.34V17.93c0-.454-.344-.87-.516-1.02.78-.182.86-1.134.802-1.587-.267.32-.893.85-1.26.396-.458-.566-1.146-.736-1.375-.736-.183 0-.343.49-.4.736-.268-.283-.883-.861-1.203-.906-.321-.046-.44.585-.459.906h-.286c-1.49-.906-1.947-.283-1.776 0 .138.227-.362.548-.63.68-.366-.045-1.87.246-2.577.397v-.68c-.596-.59-1.127-.245-1.318 0v1.53l1.89 1.7.172-.453.63.454.287-.454Zm10.31-.675-.126-.183c.037.065.079.126.126.183Z"
          clipRule="evenodd"
        />
        <path fill="#005B33" d="M7 5h8v40H7z" />
      </g>
    </CountrySymbol>
  );
});

export default LK_Sharp;
