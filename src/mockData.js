const mockData = {
  dynamicContentOptions: [
    {
      sectionTitle: "Home",
      htmlContentTextColor1:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Iconex/Light/Home" data-node-id="I1:1896;196:7062;46:5249" xmlns="http://www.w3.org/2000/svg">\n<g id="Iconex/Light/Home_2" data-node-id="I1:1896;196:7062;46:5249;30:22964">\n<g id="Home_2" data-node-id="I1:1896;196:7062;46:5249;30:22964;89:3287">\n<path id="Rectangle 74" data-node-id="I1:1896;196:7062;46:5249;30:22964;89:3288" d="M3.46375,11.00315c0,-1.1 0.5037,-2.14 1.3671,-2.821l4.942,-3.902c1.3058,-1.031 3.1484,-1.031 4.4543,0l4.942,3.902c0.8633,0.681 1.3671,1.721 1.3671,2.821v5.896c0,1.985 -1.6092,3.594 -3.5942,3.594h-1.3479c-0.4962,0 -0.8985,-0.402 -0.8985,-0.899v-2.695c0,-0.993 -0.8046,-1.797 -1.7971,-1.797h-1.7971c-0.9925,0 -1.7971,0.804 -1.7971,1.797v2.695c0,0.497 -0.4023,0.899 -0.8986,0.899h-1.3478c-1.985,0 -3.5942,-1.609 -3.5942,-3.594z" stroke="#FEFEFD" stroke-width="1.34783"/>\n</g>\n</g>\n</g></svg>',
    },
    {
      sectionTitle: "Activities",
      htmlContentTextColor1:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Iconex/Light/Timer" data-node-id="I1:1896;46:5346;46:5249" xmlns="http://www.w3.org/2000/svg">\n<g id="Iconex/Light/Timer_2" data-node-id="I1:1896;46:5346;46:5249;30:22876">\n<g id="Timer" data-node-id="I1:1896;46:5346;46:5249;30:22876;89:4334">\n<circle id="Ellipse 32" data-node-id="I1:1896;46:5346;46:5249;30:22876;89:4335" cx="12.000049999999987" cy="13.333549999999946" r="8" stroke="#FEFEFE" stroke-width="1.33333"/>\n<path id="Vector 134" data-node-id="I1:1896;46:5346;46:5249;30:22876;89:4336" d="M10.22225,2.66655h3.5556" stroke="#FEFEFE" stroke-width="1.33333" stroke-linecap="round"/>\n<path id="Vector 135" data-node-id="I1:1896;46:5346;46:5249;30:22876;89:4337" d="M12.00005,2.66655v2.667" stroke="#FEFEFE" stroke-width="1.33333" stroke-linecap="round"/>\n<path id="Vector 132" data-node-id="I1:1896;46:5346;46:5249;30:22876;89:4338" d="M12.00005,13.33355l2.6667,-2.667" stroke="#FEFEFE" stroke-width="1.33333" stroke-linecap="round"/>\n<path id="Vector 133" data-node-id="I1:1896;46:5346;46:5249;30:22876;89:4339" d="M17.77785,7.11055l0.4444,-0.444" stroke="#FEFEFE" stroke-width="1.33333" stroke-linecap="round"/>\n</g>\n</g>\n</g></svg>',
    },
    {
      sectionTitle: "Analytics",
      htmlContentTextColor1:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Iconex/Light/Chart" data-node-id="I1:1896;46:5357;46:5255" xmlns="http://www.w3.org/2000/svg">\n<g id="Iconex/Light/Chart_2" data-node-id="I1:1896;46:5357;46:5255;30:22832">\n<g id="Chart" data-node-id="I1:1896;46:5357;46:5255;30:22832;89:4313">\n<rect id="Rectangle 2" data-node-id="I1:1896;46:5357;46:5255;30:22832;89:4314" x="3.111149999999995" y="3.111150000000009" width="17.7778" height="17.7778" rx="4.44444" stroke="#FEFEFE" stroke-width="1.33333"/>\n<path id="Line" data-node-id="I1:1896;46:5357;46:5255;30:22832;89:4315" d="M8.52185,15.97215v-2.583" stroke="#FEFEFE" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n<path id="Line_2" data-node-id="I1:1896;46:5357;46:5255;30:22832;89:4316" d="M12.11605,15.97215v-8.611" stroke="#FEFEFE" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n<path id="Line_3" data-node-id="I1:1896;46:5357;46:5255;30:22832;89:4317" d="M15.71015,15.97215v-6.028" stroke="#FEFEFE" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n</g>\n</g>\n</g></svg>',
    },
    {
      sectionTitle: "Transformation",
      htmlContentTextColor1:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Iconex/Light/Rocket" data-node-id="I1:1896;46:5369;46:5249" xmlns="http://www.w3.org/2000/svg">\n<g id="Iconex/Light/Rocket_2" data-node-id="I1:1896;46:5369;46:5249;30:23013">\n<g id="Rocket" data-node-id="I1:1896;46:5369;46:5249;30:23013;89:4421">\n<path id="Vector" data-node-id="I1:1896;46:5369;46:5249;30:23013;89:4422" d="M17.68235,12.60325l-0.4888,-0.454zM11.39695,6.31725l0.4533,0.489zM20.66665,5.01525l0.6611,0.086zM18.98505,3.33325l0.0864,0.661zM7.18535,12.46225l0.5986,0.294zM11.53765,16.81425l-0.2935,-0.598zM8.72565,10.24625c-0.2603,-0.261 -0.6824,-0.261 -0.9428,0c-0.2603,0.26 -0.2603,0.682 0,0.943zM12.81115,16.21725c0.2604,0.26 0.6825,0.26 0.9429,0c0.2603,-0.261 0.2603,-0.683 0,-0.943zM7.15435,17.78825c0.2603,-0.26 0.2603,-0.682 0,-0.943c-0.2604,-0.26 -0.6825,-0.26 -0.9428,0zM3.69735,19.36025c-0.2603,0.26 -0.2603,0.682 0,0.942c0.2604,0.261 0.6825,0.261 0.9428,0zM5.26875,15.90325c0.2603,-0.261 0.2603,-0.683 0,-0.943c-0.2604,-0.261 -0.6825,-0.261 -0.9428,0zM3.06885,16.21725c-0.2604,0.26 -0.2604,0.682 0,0.943c0.2603,0.26 0.6824,0.26 0.9428,0zM9.03995,19.67425c0.2604,-0.261 0.2604,-0.683 0,-0.943c-0.2603,-0.26 -0.6824,-0.26 -0.9428,0zM6.84005,19.98825c-0.2603,0.26 -0.2603,0.683 0,0.943c0.2604,0.26 0.6825,0.26 0.9428,0zM10.83125,19.95725l0.66,-0.095zM15.41965,16.87725l0.66,-0.094zM4.04305,13.16825l0.0943,-0.66v0zM7.12285,8.58025l-0.0942,0.66v0zM10.07945,15.99925l-2.079,-2.079l-0.9428,0.943l2.079,2.079zM17.19355,12.14925c-1.6832,1.815 -4.4163,3.315 -5.9494,4.067l0.587,1.197c1.5468,-0.758 4.4763,-2.347 6.34,-4.357zM7.78395,12.75625c0.7515,-1.534 2.2515,-4.267 4.0663,-5.95l-0.9066,-0.977c-2.0095,1.863 -3.5986,4.793 -4.3569,6.34zM20.00565,4.92825c-0.2701,2.065 -0.9877,5.254 -2.8121,7.221l0.9776,0.907c2.1293,-2.296 2.8823,-5.858 3.1566,-7.955zM11.85025,6.80625c1.9671,-1.824 5.156,-2.542 7.2212,-2.812l-0.1729,-1.322c-2.0969,0.274 -5.6591,1.027 -7.9549,3.157zM21.32775,5.10125c0.1876,-1.434 -0.9946,-2.617 -2.4292,-2.429l0.1729,1.322c0.5662,-0.074 1.0082,0.368 0.9342,0.934zM8.00045,13.92025c-0.3228,-0.323 -0.4017,-0.787 -0.2165,-1.164l-1.1972,-0.587c-0.4518,0.921 -0.2294,1.994 0.4709,2.694zM9.13665,16.94225c0.7002,0.7 1.773,0.923 2.6945,0.471l-0.587,-1.197c-0.3777,0.185 -0.8419,0.106 -1.1647,-0.217zM7.78285,11.18925l5.0283,5.028l0.9429,-0.943l-5.0284,-5.028zM6.21155,16.84525l-2.5142,2.515l0.9428,0.942l2.5142,-2.514zM4.32595,14.96025l-1.2571,1.257l0.9428,0.943l1.2571,-1.257zM8.09715,18.73125l-1.2571,1.257l0.9428,0.943l1.2571,-1.257zM13.12545,7.41725c-0.9546,0.955 -0.9546,2.503 0,3.457l0.9428,-0.943c-0.4339,-0.433 -0.4339,-1.137 0,-1.571zM13.12545,10.87425c0.9546,0.955 2.5024,0.955 3.457,0l-0.9428,-0.943c-0.4339,0.434 -1.1375,0.434 -1.5714,0zM16.58245,10.87425c0.9546,-0.954 0.9546,-2.502 0,-3.457l-0.9428,0.943c0.4339,0.434 0.4339,1.138 0,1.571zM16.58245,7.41725c-0.9546,-0.954 -2.5024,-0.954 -3.457,0l0.9428,0.943c0.4339,-0.434 1.1375,-0.434 1.5714,0zM14.69685,17.16025l-2.8285,2.828l0.9428,0.943l2.8285,-2.829zM11.49125,19.86225l-0.3771,-2.639l-1.3199,0.188l0.3771,2.64zM14.50825,15.21125l0.2514,1.76l1.32,-0.188l-0.2515,-1.76zM11.86835,19.98825c-0.1294,0.13 -0.3512,0.056 -0.3771,-0.126l-1.3199,0.189c0.1813,1.269 1.7334,1.786 2.6398,0.88zM15.63965,18.10225c0.3462,-0.346 0.5092,-0.835 0.44,-1.319l-1.32,0.188c0.0099,0.069 -0.0134,0.139 -0.0628,0.189zM5.89725,8.36025l-2.8284,2.829l0.9428,0.942l2.8284,-2.828zM3.94875,13.82825l2.6399,0.378l0.1886,-1.32l-2.6399,-0.378zM8.97705,8.17225l-1.7599,-0.252l-0.1885,1.32l1.7599,0.251zM3.06885,11.18925c-0.9064,0.906 -0.389,2.458 0.8799,2.639l0.1886,-1.32c-0.1813,-0.025 -0.2552,-0.247 -0.1257,-0.377zM6.84005,9.30325c0.0495,-0.05 0.1193,-0.073 0.1886,-0.063l0.1885,-1.32c-0.4847,-0.069 -0.9737,0.094 -1.3199,0.44z" fill="currentColor"/>\n</g>\n</g>\n</g></svg>',
    },
    {
      sectionTitle: "Library",
      htmlContentTextColor1:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Iconex/Light/Layers" data-node-id="I1:1896;46:5363;46:5249" xmlns="http://www.w3.org/2000/svg">\n<g id="Iconex/Light/Layers_2" data-node-id="I1:1896;46:5363;46:5249;30:22833">\n<path id="Vector_2" data-node-id="I1:1896;46:5363;46:5249;30:22833;89:4452" d="M17.08345,9.8025l1.8892,1.022l0.3954,0.222c0.8426,0.473 0.8426,1.694 0,2.167l-5.3658,3.015c-1.2445,0.699 -2.7599,0.699 -4.0044,0l-5.3659,-3.015c-0.8426,-0.473 -0.8426,-1.694 0,-2.167l0.3955,-0.222l1.7844,-1.022M17.49435,14.3525l1.7172,0.864c0.8856,0.446 0.914,1.708 0.0494,2.194l-5.2587,2.954c-1.2445,0.699 -2.7599,0.699 -4.0044,0l-5.182,-2.911c-0.8795,-0.494 -0.831,-1.784 0.083,-2.21l1.913,-0.891M14.00225,11.8325l5.3658,-3.015c0.8426,-0.473 0.8426,-1.694 0.0001,-2.167l-5.3659,-3.015c-1.2445,-0.699 -2.7599,-0.699 -4.0044,0l-5.3659,3.015c-0.8426,0.473 -0.8426,1.694 0,2.167l5.3659,3.015c1.2445,0.699 2.7599,0.699 4.0044,0z" stroke="#FEFEFE" stroke-width="1.33333"/>\n</g>\n</g></svg>',
    },
  ],
  possibleDynamicContentBoxArguments1: [
    { sectionTitle: "7", metricType: "Completed Iteratiions" },
    { sectionTitle: "9", metricType: "Total Iterations" },
    { sectionTitle: "77.8%", metricType: "% Iterations Done" },
  ],
  possibleDynamicContentBoxArguments: [
    { sectionTitle: "3200", metricType: "Story Points Done" },
    { sectionTitle: "4230", metricType: "Total Story Points" },
    { sectionTitle: "70.9%", metricType: "% Stories Done" },
  ],
  possibleDefectMetricsArguments: [
    { defectArrivalRateValue: "/Defect Arrival Rate" },
    { defectArrivalRateValue: "/Fixed Rate" },
    { defectArrivalRateValue: "/cycle time" },
    { defectArrivalRateValue: "/lead time" },
    { defectArrivalRateValue: "/new features" },
    { defectArrivalRateValue: "/ready features" },
  ],
  possibleDefectMetricsDataList: [
    { defectArrivalRateValue: "872,337" },
    { defectArrivalRateValue: "803,792" },
    { defectArrivalRateValue: "740,702" },
    { defectArrivalRateValue: "676,659" },
    { defectArrivalRateValue: "508,837" },
    { defectArrivalRateValue: "495,938" },
  ],
  defectMetricsDataList1: [
    { defectArrivalRateValue: "(15.82%)" },
    { defectArrivalRateValue: "(14.39%)" },
    { defectArrivalRateValue: "(13.46%)" },
    { defectArrivalRateValue: "(10.29%)" },
    { defectArrivalRateValue: "(7.74%)" },
    { defectArrivalRateValue: "(7.38%)" },
  ],
  listOfDefectMetricsData: [
    { defectArrivalRateValue: "574,332" },
    { defectArrivalRateValue: "456,792" },
    { defectArrivalRateValue: "405,860" },
    { defectArrivalRateValue: "340,765" },
    { defectArrivalRateValue: "317,543" },
    { defectArrivalRateValue: "310,554" },
  ],
  defectMetricsDataSet: [
    { defectArrivalRateValue: "(15.33%)" },
    { defectArrivalRateValue: "(13.93%)" },
    { defectArrivalRateValue: "(13.25%)" },
    { defectArrivalRateValue: "(11.70%)" },
    { defectArrivalRateValue: "(10.66%)" },
    { defectArrivalRateValue: "(10.58%)" },
  ],
  defectMetricsList: [
    { defectArrivalRateValue: "00:05:43" },
    { defectArrivalRateValue: "00:05:24" },
    { defectArrivalRateValue: "00:04:36" },
    { defectArrivalRateValue: "00:04:12" },
    { defectArrivalRateValue: "00:04:11" },
    { defectArrivalRateValue: "00:02:56" },
  ],
  possibleDefectMetricsDataList1: [
    { defectArrivalRateValue: "802,873" },
    { defectArrivalRateValue: "793,982" },
    { defectArrivalRateValue: "684,873" },
    { defectArrivalRateValue: "638,982" },
    { defectArrivalRateValue: "555,982" },
    { defectArrivalRateValue: "297,303" },
  ],
  defectMetricsDataList: [
    { defectArrivalRateValue: "(16.75%)" },
    { defectArrivalRateValue: "(15.64%)" },
    { defectArrivalRateValue: "(14.33%)" },
    { defectArrivalRateValue: "(13.02%)" },
    { defectArrivalRateValue: "(10.44%)" },
    { defectArrivalRateValue: "(6.07%)" },
  ],
  defectMetricsPercentages: [
    { defectArrivalRateValue: "25.96%" },
    { defectArrivalRateValue: "76.13%" },
    { defectArrivalRateValue: "41.54%" },
    { defectArrivalRateValue: "46.42%" },
    { defectArrivalRateValue: "27.40%" },
    { defectArrivalRateValue: "28.89%" },
  ],
  defectMetricsList1: [
    { defectArrivalRateValue: "$1,093" },
    { defectArrivalRateValue: "$6,792" },
    { defectArrivalRateValue: "$702" },
    { defectArrivalRateValue: "$2,659" },
    { defectArrivalRateValue: "$4,508" },
    { defectArrivalRateValue: "$495" },
  ],
  defectMetricsDataList2: [
    { defectArrivalRateValue: "(5.11%)" },
    { defectArrivalRateValue: "(36.16%)" },
    { defectArrivalRateValue: "(3.47%)" },
    { defectArrivalRateValue: "(11.64%)" },
    { defectArrivalRateValue: "(23.43%)" },
    { defectArrivalRateValue: "(7.38%)" },
  ],
};

export { mockData };
