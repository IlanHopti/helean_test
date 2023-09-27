import React from 'react'
import {motion} from "framer-motion";
import PrecisionRoll from "./PrecisionRoll";
import {AiOutlineClose} from "react-icons/ai";

export default function PopUp({setIsVisible, data}) {
  return (
    <motion.div
      key="backdrop"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{delay: 0.1}}
      className="popup"
    >
      <div className="popup_inner">
        <div className="popup_exit_button">
          <button onClick={() => setIsVisible(false)}><AiOutlineClose/></button>
        </div>
        <div className="popup_header">
          <div className="popup_container_img">
            <img src={data?.shop_picture} className="popup_shop_info_img" alt={'image of the store'}/>
          </div>

          {/*<div className="popup_container_stats">*/}
          <div className="container_precision_roll">
            <p>Score total :</p>
            <PrecisionRoll R={data?.total_shop_score / 100}/>
          </div>

          <div className="container_shop_info">
            <p>{data?.shop_name}</p>
            <p>{data?.shop_adress}</p>
            <p>{data?.shop_manager_name + ' ' + data?.shop_manager_surname}</p>
          </div>
          {/*</div>*/}
        </div>

        <div className="popup_body">
          {data?.data.map((item, index) => {
            return (
              <div className="container_item" key={index}>
                <div className="item_header">
                  <div className="item_header_score">
                    <p>Score n°{index + 1}</p>
                  </div>
                  <div className="item_header_precision_roll">
                    <p>R</p>
                  </div>
                </div>
                <div className="item_stats">
                  <div className="item_stats_score">
                    <p>{item?.mean_shop}</p>
                    <div className="divider"/>
                  </div>
                  <div className="item_stats_precision_roll">
                    <PrecisionRoll R={item?.R}/>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}