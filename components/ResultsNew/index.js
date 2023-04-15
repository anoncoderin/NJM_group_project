import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/ResultsNew/ResultsNew.module.css";
import { fruitsAndVeggiesCatalogue } from "@/data/fruitsAndVeggiesCatalogue";


export default function ResultsNew(userinput) {
  const match = userinput.userinput;
  console.log("userinput", userinput);

  return (
    <>
      <div className={styles.whole_result_container}>
        <h2 className={styles.h_text}>Results </h2>
        <p className={styles.p_text}>
          These vegetables are the most suitable for you to grow based on your
          results.{" "}
        </p>
        {fruitsAndVeggiesCatalogue &&
          fruitsAndVeggiesCatalogue.map((item, i) =>
            // console.log("index",item.index, match, item.index.includes(match)) &&
            (Array.isArray(item.index)
              ? item.index.includes(match)
              : item.index === match) && (
                  <div>
                    <div className={styles.image_selections_bottom}>
                      <div className={styles.list_image}>
                        <Image src={item.img} width={292} height={136}></Image>
                      </div>
                    </div>
                  </div>
                )
          )}
      </div>
    </>
  );
}
