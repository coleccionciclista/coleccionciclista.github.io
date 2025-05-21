const allImagesArray = [
    //////// 2025 ////////////
    { year: 2025, bolsa: "bidones\\2025\\IMG_6562.jpg", equipo: "ROLAND " },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6563.jpg", equipo: "ROLAND CARA 2 " },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6564.jpg ", equipo: "TEAM MEDELLIN - EPM " },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6130.jpg ", equipo: "EUSKALTEL EUSKADI TEAM EDICION LIMITADA DANA " },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6131.jpg ", equipo: "EUSKALTEL EUSKADI TEAM EDICION LIMITADA DANA CARA 2 " },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6132.jpg ", equipo: "EUSKALTEL EUSKADI TEAM EDICION LIMITADA DANA CARA 3 " },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6133.jpg ", equipo: "VUELTA CICLISTA ANDALUCIA " },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6134.jpg ", equipo: "VUELTA CICLISTA ANDALUCIA PARTE TRASERA " },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6484.jpg ", equipo: "INTERMARCHÉ - WANTY " },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6489.jpg ", equipo: "INTERMARCHÉ - WANTY LATERAL " },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6485.jpg ", equipo: "XSPEED UNITED CONYINENTAL" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6486.jpg ", equipo: "BAHRAIN VICTORIOUS  " },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6487.jpg ", equipo: "BAHRAIN VICTORIOUS CARA 2  " },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6488.jpg ", equipo: "BAHRAIN VICTORIOUS CARA 3  " },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6490.jpg ", equipo: "GROUPAMA - FDJ " },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6491.jpg ", equipo: "UAE Team ADQ " },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6492.jpg ", equipo: "UAE Team ADQ PARTE TRASERA " },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6493.jpg ", equipo: "" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6494.jpg ", equipo: "" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6497.jpg ", equipo: "EUSKALTEL EUSKADI " },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6498.jpg ", equipo: "EUSKALTEL EUSKADI CARA 2" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6499.jpg ", equipo: "EUSKALTEL EUSKADI CARA 3" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6500.jpg ", equipo: "LABORAL KUTXA - FUNDACIÓN EUSKADI" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6501.jpg ", equipo: "LABORAL KUTXA - FUNDACIÓN EUSKADI CARA 2" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6502.jpg ", equipo: "LABORAL KUTXA - FUNDACIÓN EUSKADI CARA 3" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6504.jpg ", equipo: "TEAM VISMA | LEASE A BIKE" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6506.jpg ", equipo: "XDS ASTANA TEAM " },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6527.jpg ", equipo: "XDS ASTANA TEAM" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6507.jpg ", equipo: "SOUDAL QUICK-STEP " },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6508.jpg ", equipo: "SOUDAL QUICK-STEP CARA 2" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6509.jpg ", equipo: "BURGOS-BURPELLET-BH" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6510.jpg ", equipo: "BURGOS-BURPELLET-BH CARA 2" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6511.jpg ", equipo: "BURGOS-BURPELLET-BH CARA 3" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6516.jpg ", equipo: "DANENA TXIRRINDULARITZA ESKOLA" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6517.jpg ", equipo: "DANENA TXIRRINDULARITZA ESKOLA CARA 2 " },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6519.jpg ", equipo: "CYCLING TEAM WAGNER-BAZIN WB" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6518.jpg ", equipo: "CYCLING TEAM WAGNER-BAZIN WB CARA 2" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6520.jpg ", equipo: "TEAM PICNIC POSTNL " },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6521.jpg ", equipo: "TEAM PICNIC POSTNL CARA 2" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6522.jpg ", equipo: "" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6523.jpg ", equipo: "TUDOR PRO CYCLING TEAM " },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6525.jpg ", equipo: "RED BULL - BORA - HANSGROHE " },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6526.jpg ", equipo: "PROJECT ECHELON RACING" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6528.jpg ", equipo: "EUSKALTEL EUSKADI" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6529.jpg ", equipo: "EUSKALTEL EUSKADI CARA 1" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6530.jpg ", equipo: "EUSKALTEL EUSKADI CARA 2" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6531.jpg ", equipo: "WINSPACE" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6532.jpg ", equipo: "MANTECA PROFESIONAL ASSISTANCE" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6538.jpg ", equipo: "ALIMCO-CAMPAGNOLO" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6539.jpg ", equipo: "MENTORISE TEEM CCN" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6540.jpg ", equipo: "ENEICAT - CMTEAM" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6541.jpg ", equipo: "ENEICAT - CMTEAM CARA 2" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6542.jpg ", equipo: "ENEICAT - CMTEAM CARA 3" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6543.jpg ", equipo: "ENEICAT - CMTEAM " },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6544.jpg ", equipo: "ENEICAT - CMTEAM CARA 2 " },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6545.jpg ", equipo: "ENEICAT - CMTEAM CARA 3" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6546.jpg ", equipo: "TEAM SD WORX – PROTIME" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6547.jpg ", equipo: "TEAM SD WORX – PROTIME CARA 2" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6548.jpg ", equipo: "LOTTO CYCLING TEAM" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6549.jpg ", equipo: "TOTALENERGIES" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6550.jpg ", equipo: "UAE TEAM EMIRATES - XRG " },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6551.jpg ", equipo: "TDT Unibet" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6554.jpg ", equipo: "UAE TEAM EMIRATES - XRG " },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6552.jpg ", equipo: "MOVISTAR TEAM" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6555.jpg ", equipo: "ARKEA-B&B HOTELS" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6556.jpg ", equipo: "PROJECT ECHELON RACING" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6557.jpg ", equipo: "LIV - ALULA - JAYCO" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6558.jpg ", equipo: "BEPINK - IMATRA - BONGIOANNI" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6559.jpg ", equipo: "BEPINK - IMATRA - BONGIOANNI CARA 2" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6560.jpg ", equipo: "Q36.5 PRO CYCLING TEAM" },
    { year: 2025, bolsa: "bidones\\2025\\IMG_6561.jpg", equipo: "Q36.5 PRO CYCLING TEAM CARA 2" },
    //////// 2024 ////////////
    //Anicolor /Equipo de ciclismo Tien21

    { year: 2024, bolsa: "bidones\\2024\\IMG_3924.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_3925.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_3926.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_3927.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_3928.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4758.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4759.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4760.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4761.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4762.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4763.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4764.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4766.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4768.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4769.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4770.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4771.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4772.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4774.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4775.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4778.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4779.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4780.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4781.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4782.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4783.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4786.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4789.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4792.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4793.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4795.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4796.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4797.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4798.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4799.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4800.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4801.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4804.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4805.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4806.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4808.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4809.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4810.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4811.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4812.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4813.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4814.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4816.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4817.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4818.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4819.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4820.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4821.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4822.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4823.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4824.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4825.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4826.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4827.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4828.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4829.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4830.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4831.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4832.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4833.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4834.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4835.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4836.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4837.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4838.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4839.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4840.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4841.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4844.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4845.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4846.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4854.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4855.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4857.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4858.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4859.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4862.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4865.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4866.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4867.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4869.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4870.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4871.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4872.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4878.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4879.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4880.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4882.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4885.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4886.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4887.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4888.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4889.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4890.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4919.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4922.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4923.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4925.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4926.jpg", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4927.jpg", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4931.jpg", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4932.jpg", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4933.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4935.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4936.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4937.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4939.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4940.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4941.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4942.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4943.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4944.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4945.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4946.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4949.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4950.jpg", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4951.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4952.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4953.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4954.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4955.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4956.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4957.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4962.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4963.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4964.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4965.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4967.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4968.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4969.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4970.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4971.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4972.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4974.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4975.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4978.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4979.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4980.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4981.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4986.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4987.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4989.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4990.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4991.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4992.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4993.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4994.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4995.jpg", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4996.jpg", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4998.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_4999.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5001.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5002.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5003.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5007.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5008.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5009.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5010.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5011.jpg", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5012.jpg", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5013.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5014.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5015.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5016.jpg", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5017.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5018.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5019.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5020.jpg", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5025.jpg", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5026.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5027.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5029.jpg", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5032.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5040.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5041.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5043.jpg", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5044.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5045.jpg", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5046.jpg", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5070.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5071.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5072.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5073.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5075.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5091.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5092.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5100.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5101.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5103.jpg", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5104.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5105.jpg", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5106.jpg", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5107.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5108.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5109.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5121.jpg", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5122.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5123.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5124.jpg", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5125.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5126.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5133.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5195.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5196.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5197.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5198.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5199.jpg", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5200.jpg", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5201.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5202.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5205.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5206.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5332.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5333.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5480.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5481.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5482.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5483.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_5484.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_6050.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_6052.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_6060.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_6061.jpg", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_6062.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_6063.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_6065.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_6068.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_6069.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_6079.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_6080.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_6081.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_6085.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_6135.jpg  ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_6136.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_6137.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_6141.jpg ", equipo: "" },
    { year: 2024, bolsa: "bidones\\2024\\IMG_6503.jpg", equipo: "" },
     //////////1984////////////////////
   { year: 1984, bolsa: "bidones\\1980\\IMG20221230151446.jpg ", equipo: "" },
   { year: 1984, bolsa: "bidones\\1980\\IMG20221230151450.jpg ", equipo: "" },
   { year: 1984, bolsa: "bidones\\1980\\IMG20221230151454.jpg ", equipo: "" },
   { year: 1984, bolsa: "bidones\\1980\\IMG20221230153355.jpg ", equipo: "" },
     //////////1982////////////////////
   { year: 1980, bolsa: "bidones\\1980\\IMG20221230150927.jpg ", equipo: "" },
    { year: 1980, bolsa: "bidones\\1980\\IMG20221230150938.jpg ", equipo: "" },
    //////////1980////////////////////
    { year: 1980, bolsa: "bidones\\1980\\IMG20221229130126.jpg ", equipo: "" },
    { year: 1980, bolsa: "bidones\\1980\\IMG20221230150828.jpg ", equipo: "" },
    { year: 1980, bolsa: "bidones\\1980\\IMG20221230152343.jpg ", equipo: "" },
    //////////1978////////////////////
    { year: 1978, bolsa: "bidones\\1978\\IMG20221231184817.jpg ", equipo: "" },
    //////////1977////////////////////
    //////////1976////////////////////
    { year: 1976, bolsa: "bidones\\1976\\IMG20221229125604.jpg ", equipo: "" },
    { year: 1976, bolsa: "bidones\\1976\\IMG20221229125610.jpg", equipo: "" },
    //////////1975////////////////////
    { year: 1975, bolsa: "bidones\\1975\\IMG20221229131251.jpg", equipo: "" },
];

$(document).ready(function () {
    $("p").css("display", "block");
});

// anular evento de enter en formulario
$('input').keypress(function (e) {
    if (e.which == 13) {
        return false;
    }
});

function recogervalor() {
    const selectedYear2 = document.getElementById('buscador').value;
    selectedYear = selectedYear2.toString();
    selectedYear = selectedYear.toUpperCase();
    // alert(selectedYear);
    updateGallery(selectedYear);
}





const yearDropdown = document.getElementById('yearDropdown');
const imageGallery = document.getElementById('image-gallery');
const zoomedContainer = document.getElementById('zoomedContainer');
const zoomedImage = document.getElementById('zoomedImage');


function updateGallery(selectedYear) {
    $("p").css("display", "none");

    imageGallery.innerHTML = '';

    const filteredImagesyear = allImagesArray.filter(image => image.year == selectedYear);
    const filteredImagesteam = allImagesArray.filter(image => image.equipo.includes(selectedYear));


    filteredImagesyear.forEach(image => {

        const cardElement = document.createElement('div');
        cardElement.className = 'image-card';

        const imgElement = document.createElement('img');
        imgElement.src = image.bolsa;
        imgElement.alt = `Año ${selectedYear}`;

        const textElement = document.createElement('p');
        textElement.textContent = `${image.equipo} ${image.year}`;

        cardElement.appendChild(imgElement);
        cardElement.appendChild(textElement);
        imageGallery.appendChild(cardElement);

        // Agrega un evento clic para hacer zoom
        cardElement.addEventListener('click', () => {
            zoomedImage.src = image.bolsa;
            zoomedImage.alt = `Año ${selectedYear}`;
            zoomedContainer.style.display = 'flex';
        });
    });
    try {

        // Tu código para generar imágenes

        filteredImagesteam.forEach(image => {
            const cardElement = document.createElement('div');
            cardElement.className = 'image-card';

            const imgElement = document.createElement('img');
            imgElement.src = image.bolsa;
            imgElement.alt = `Año ${selectedYear}`;

            const textElement = document.createElement('p');
            textElement.textContent = `${image.equipo} ${image.year}`;


            cardElement.appendChild(imgElement);
            cardElement.appendChild(textElement);
            imageGallery.appendChild(cardElement);

            // Agrega un evento clic para hacer zoom
            cardElement.addEventListener('click', () => {
                zoomedImage.src = image.bolsa;
                zoomedImage.alt = `Año ${selectedYear}`;
                zoomedContainer.style.display = 'flex';
            });
        });
    } catch (error) {
        console.error('Error al generar imágenes:', error);
    }
}

yearDropdown.addEventListener('change', function () {
    const selectedYear = yearDropdown.value;
    updateGallery(selectedYear);
});

// Cierra el zoom al hacer clic fuera de la imagen
zoomedContainer.addEventListener('click', () => {
    zoomedContainer.style.display = 'none';
});

updateGallery(yearDropdown.value);

updateGallery(yearDropdown.value);