import React from 'react';
import {
    AreaChart,
    XAxis,
    YAxis,
    Tooltip,
    Area,
    CartesianGrid,
    ResponsiveContainer,
  } from "recharts";
import dayjs from "dayjs";
import { BaseStore } from "../../state/interface";

interface NodeDataProps {
    data: BaseStore;
  }
export const Graph: React.FC<NodeDataProps> = (props) => {
    const { data } = props;
    console.log(data)
    const detailToolTip = (row: any) => {
        return (
          <div className="custom-tooltip text-white">
            <p>
              Date:
              {row.payload[0]?.payload.time}
            </p>
            <p>
              Voltage:
              {row.active && row.payload?.length
                ? row.payload[0]?.payload.battery
                : ""}
            </p>
          </div>
        );
      };
      const areaChartData = data.nodedetail.map((NodeDetail) => {
        return {
          name: dayjs(NodeDetail.updatedAt).format("HH:mm:ss"),
          battery: NodeDetail.Voltage,
          time: dayjs(NodeDetail.updatedAt).format("HH:mm:ss"),
        };
      });
    return (
        <ResponsiveContainer width="70%" height={200}>
            <AreaChart  width={400} height={200} data={areaChartData}>
                <CartesianGrid horizontal={true} strokeDasharray="3 3" />
                <XAxis tick={{ fill: '#fff' }} dataKey="name" minTickGap={30} />
                <YAxis tick={{ fill: '#fff' }} tickCount={3} />
                <Tooltip  content={(row) => detailToolTip(row)} />
                <Area
                type="monotone"
                dataKey="battery"
                stroke="#4788E0"
                fill="#4788E0"
                />
            </AreaChart>
        </ResponsiveContainer>
    );
  };
  
  export default Graph;
  