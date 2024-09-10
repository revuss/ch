import { Container } from "./sidenav/Container";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  NOTFOUND,
  NOTFOUND_MSSG,
  NOTFOUND_REDIRECT,
} from "@/utils/appConstants";
import { PageTransition } from "./transition/PageTransition";

function NotFound() {
  return (
    <PageTransition>
      <div className="min-h-[80vh] flex justify-center items-center">
        <Container>
          <div className="flex items-center justify-center">
            <div className="w-full flex justify-center items-center flex-col max-w-lg border-0 shadow-none">
              <Badge className="scroll-m-20 text-4xl tracking-tight mb-5 uppercase">
                {NOTFOUND}
              </Badge>
              <Label className="text-xl text-muted-foreground mb-5 text-center">
                {NOTFOUND_MSSG}
              </Label>
              <Badge className="flex justify-center px-10 py-2">
                <Link to="/">
                  <div className="flex items-center space-x-5">
                    <span className="text-sm">{NOTFOUND_REDIRECT}</span>
                  </div>
                </Link>
              </Badge>
            </div>
          </div>
        </Container>
      </div>
    </PageTransition>
  );
}

export default NotFound;
