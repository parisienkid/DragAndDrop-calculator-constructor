import Btn from "../../components/btn/Btn";
import Number from "../../components/number/Number";
import Total from "../../components/total/Total";
import Operator from "../../components/operator/Operator";
import Equal from "../../components/equal/Equal";

export const setContent = (name: string | undefined) => {
    switch(name) {
      case 'total':
        return <Total/>
      case 'operators':
        return  <div className="operators">
                  <Btn><Operator name='plus'/></Btn>
                  <Btn><Operator name='minus'/></Btn>
                  <Btn><Operator name='divide'/></Btn>
                  <Btn><Operator name='multiply'/></Btn>
                </div>
      case 'numbers':
        return  <div className="numbers">
                  <Btn><Number name='1'></Number></Btn>
                  <Btn><Number name='2'></Number></Btn>
                  <Btn><Number name='3'></Number></Btn>
                  <Btn><Number name='4'></Number></Btn>
                  <Btn><Number name='5'></Number></Btn>
                  <Btn><Number name='6'></Number></Btn>
                  <Btn><Number name='7'></Number></Btn>
                  <Btn><Number name='8'></Number></Btn>
                  <Btn><Number name='9'></Number></Btn>
                  <Btn className='zero'><Number name='0'></Number></Btn>
                  <Btn><Number name=','></Number></Btn>
                </div>
        case 'equal':
          return  <div className="equal">
                    <Btn className='blue'><Equal name='='/></Btn>
                  </div>
    }
  };