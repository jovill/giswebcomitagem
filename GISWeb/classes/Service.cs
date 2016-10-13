using System;
using System.Collections.Generic;
using System.Web;
using System.Web.Services;
using System.Data.SqlClient;
using System.Configuration;
using System.Web.Script.Services;
using System.Data;
using System.Collections;
using System.Web.UI.WebControls;
using System.Web.Script.Serialization;

/// <summary>
/// Summary description for Service_CS
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class Service : System.Web.Services.WebService
{
    
    SqlConnection conn = new SqlConnection();
    SqlCommand cmd = new SqlCommand();
    
    public Service()
    {
        
        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string GetIlu(string prefix)
        {
            DataTable dt = new DataTable();
            using (SqlConnection conn = new SqlConnection())
            {
                conn.ConnectionString = ConfigurationManager
                    .ConnectionStrings["MyConnString"].ConnectionString;

                using (SqlCommand cmd = new SqlCommand(" SELECT ID_ILUMINACAO_PUBLICA,COD_ILUM_FK,LOCALIDADE,ILUM_PUB.SHAPE.STX as X,ILUM_PUB.SHAPE.STY as Y FROM sde.ILUM_PUB LEFT JOIN sde.INFO_ILUM on sde.ILUM_PUB.OBJECTID=sde.INFO_ILUM.COD_ILUM_FK INNER JOIN sde.ILUM_PUB_KML ON sde.ILUM_PUB.OBJECTID=sde.ILUM_PUB_KML.COD_ILUM_PUB_FK   INNER JOIN sde.KML_TRATADO ON KML_TRATADO.OBJECTID=sde.ILUM_PUB_KML.COD_KML_FK", conn))
                {
                    
                    conn.Open();
                    SqlDataAdapter da = new SqlDataAdapter(cmd);
                    da.Fill(dt);
                    System.Web.Script.Serialization.JavaScriptSerializer serializer = new System.Web.Script.Serialization.JavaScriptSerializer();
                    serializer.MaxJsonLength = 2147483647;
                    serializer.RecursionLimit = 2147483647;
                    List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();
                    Dictionary<string, object> row;
                    foreach (DataRow dr in dt.Rows)
                    {
                        row = new Dictionary<string, object>();
                        foreach (DataColumn col in dt.Columns)
                        {
                            row.Add(col.ColumnName, dr[col]);
                        }
                        rows.Add(row);
                    }
                    return serializer.Serialize(rows);

                }

            }
        }
    
    
  
}

   
  


    
    




   
    
