  import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
import {Link} from "react-router-dom";
import { useAPIContext } from "../Provider/Service_API_Provider";

  export const Cards = ({curr}) => {
    
    const {sendCurrentUser}=useAPIContext();
    const { id, title, price, description, category, image } = curr;

    return (

      <Card className=" m-5  w-96">
        <CardHeader color="blue-gray" className="relative h-56">
         <Link to="/sp">
         <img
            src={image}
            alt="card-image"
           onClick={() => sendCurrentUser(curr)}
           />
         </Link> 
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography>
            ${price}<br />
            Category: {category}

          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          {/* <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Add to cart
          </button> */}
        </CardFooter>
      </Card>

    );
  }