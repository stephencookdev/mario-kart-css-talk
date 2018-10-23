import React from "react";
import classNames from "classnames";
import styles from "./styles.scss";

const OccludedMario = ({
  showAll = false,
  occlude = true,
  styleOverride,
  className
}) => (
  <div
    className={classNames(
      styles.mario,
      showAll && styles.showAll,
      occlude && styles.occlude,
      className
    )}
  >
    <div className={styles.marioInner} style={styleOverride} />
  </div>
);

export default ({ showAll = false, occlude = true, styleOverride }) =>
  occlude ? (
    <OccludedMario {...{ showAll, occlude, styleOverride }} />
  ) : (
    <div className={styles.noccludeWrapper}>
      <OccludedMario
        {...{
          occlude,
          styleOverride,
          className: styles.noccludeFg
        }}
      />
      <OccludedMario
        {...{
          occlude,
          styleOverride,
          className: styles.noccludeBg
        }}
      />
    </div>
  );
