var tempdizi;
var tempbase;
sap.ui.define(
  ["com/UI5Starter/Application/Base/BaseController"],
  function (BaseController) {
    "use strict";
    var base, oRouter;
    return BaseController.extend(
      "com.UI5Starter.Application.Dashboard.controller.Dashboard",
      {
        onInit: function () {
          var base = this;
          var UrunListesi = base.byId("urunlist");
          tempbase = base;
          oRouter = sap.ui.core.UIComponent.getRouterFor(base);
          oRouter
            .getRoute("Dashboard")
            .attachPatternMatched(base.getData, base);
        },
        getData: function () {
          $.ajax({
            url: "https://fakestoreapi.com/products",
            dataType: "json",
            success: function (res) {
              console.log(res);
              oModel.setProperty("/ProductList", res);
            },
            selectUrun:function(oEvent){
              debugger;
            }
          });
        },
      }
    );
  }
);
