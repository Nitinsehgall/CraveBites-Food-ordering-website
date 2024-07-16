
"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export function TermsAndCondion() {
  const [openModal, setOpenModal] = useState(true);

  return (
    <>

      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <Modal  dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Welcome to CraveBites! These terms and conditions outline the rules and regulations for the use of CraveBites' website and services. By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use CraveBites' website if you do not accept all of the terms and conditions stated on this page.

            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            At CraveBites, we aim to provide a seamless and intuitive ordering experience. Our platform allows you to explore a variety of cuisines from local restaurants and place your orders with ease. We partner with reliable delivery services to ensure your food arrives fresh and on time. Please note that delivery times may vary based on your location and restaurant availability. We strive to keep you updated on the status of your order and address any issues promptly.


            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="bg-slate-900" onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    
    </>
  );
}
